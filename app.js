// Copyright FIRST, Red Hat, and contributors
// SPDX-License-Identifier: BSD-2-Clause

const app = Vue.createApp({
    data() {
        return {
            cvssConfigData: cvssConfig,
            buttonTexts: button_texts,
            otherTexts: other_texts,
            severity_text:severity_text,
            maxComposedData: maxComposed,
            maxSeverityData: maxSeverity,
            expectedMetricOrder: expectedMetricOrder,
            cvssMacroVectorDetailsData: cvssMacroVectorDetails,
            cvssMacroVectorValuesData: cvssMacroVectorValues,
            showDetails: false,
            cvssSelected: null,
            header_height: 0,
            lookup: cvssLookup_global,
            macroVector: null,
            translator :translator
        }
    },
    methods: {
        buttonClass(isPrimary, big = false) {
            result = "btn btn-m"
            if (isPrimary) {
                result += " btn-primary"
            }
            if (!big) {
                result += " btn-sm"
            }

            return result
        },
        scoreClass(qualScore) {
            if (qualScore == "Low" || qualScore == "低") {
                return "c-hand text-success"
            }
            else if (qualScore == "Medium"|| qualScore == "中") {
                return "c-hand text-warning"
            }
            else if (qualScore == "High"|| qualScore == "高") {
                return "c-hand text-error"
            }
            else if (qualScore == "Critical"|| qualScore == "严重") {
                return "c-hand text-error text-bold"
            }
            else {
                return "c-hand text-gray"
            }
        },
        copyVector() {
            navigator.clipboard.writeText(this.vector)
            window.location.hash = this.vector
        },
        onButton(metric, value) {
            this.cvssSelected[metric] = value
            window.location.hash = this.vector
        },
        setButtonsToVector(vector) {
            this.resetSelected()
            metrics = vector.split("/")
            // Remove hash + CVSS v4.0 prefix
            prefix = metrics[0].slice(1);
            if (prefix != "CVSS:4.0") {
                console.log("Error invalid vector, missing CVSS v4.0 prefix")
                return
            }
            metrics.shift()

            // Ensure compliance first
            toSelect = {}
            oi = 0
            for (index in metrics) {
                [key, value] = metrics[index].split(":")

                expected = Object.entries(this.expectedMetricOrder)[oi++]
                while (true) {
                    // If out of possible metrics ordering, it not a valid value thus
                    // the vector is invalid
                    if (expected == undefined) {
                        console.log("Error invalid vector, too many metric values")
                        return
                    }
                    if (key != expected[0]) {
                        // If not this metric but is mandatory, the vector is invalid
                        // As the only mandatory ones are from the Base group, 11 is the
                        // number of metrics part of it.
                        if (oi <= 11) {
                            console.log("Error invalid vector, missing mandatory metrics")
                            return
                        }
                        // If a non-mandatory, retry
                        expected = Object.entries(this.expectedMetricOrder)[oi++]
                        continue
                    }
                    break
                }
                // The value MUST be part of the metric's values, case insensitive
                if (!expected[1].includes(value)) {
                    console.log("Error invalid vector, for key " + key + ", value " + value + " is not in " + expected[1])
                    return
                }
                if (key in this.cvssSelected) {
                    toSelect[key] = value
                }
            }

            // Apply iff is compliant
            for (key in toSelect) {
                this.cvssSelected[key] = toSelect[key]
            }
            this.macroVector = macroVector(this.cvssSelected)

        },
        onReset() {
            window.location.hash = ""
        },
        resetSelected() {
            this.cvssSelected = {}
            for ([metricType, metricTypeData] of Object.entries(this.cvssConfigData)) {
                for ([metricGroup, metricGroupData] of Object.entries(metricTypeData.metric_groups)) {
                    for ([metric, metricData] of Object.entries(metricGroupData)) {
                        this.cvssSelected[metricData.short] = metricData.selected
                    }
                }
            }
        },
        // debugPrintCvssConfigCn() {
        //     console.log("cvssConfigCn:", cvssConfigCn);
        // },

        switchLanguage(){
            const configDataStr = JSON.stringify(this.cvssConfigData);
            const isEnglish = configDataStr === JSON.stringify(cvssConfig);
            const targetConfig = isEnglish ? cvssConfigCn : cvssConfig;
            const targetButtonConfig = isEnglish ? button_texts_cn : button_texts;
            const targetOtherConfig = isEnglish ? other_texts_cn : other_texts;
            const targetcvssMacroVectorDetailsData = isEnglish ? cvssMacroVectorDetails_cn : cvssMacroVectorDetails;
            const targetcvssMacroVectorValuesData = isEnglish ? cvssMacroVectorValues_cn : cvssMacroVectorValues;
            const targetseverity_text = isEnglish ? severity_text_cn : severity_text;
            const targetranslator = isEnglish ? translator_cn : translator;

            console.log(isEnglish ? "当前是英文配置，即将切换至中文配置..." : "当前是中文配置，即将切换至英文配置...");
            this.cvssConfigData = targetConfig;
            this.buttonTexts = targetButtonConfig
            this.otherTexts = targetOtherConfig
            this.cvssMacroVectorDetailsData = targetcvssMacroVectorDetailsData
            this.cvssMacroVectorValuesData = targetcvssMacroVectorValuesData
            this.severity_text = targetseverity_text
            this.translator = targetranslator
            document.title = "CVSS v4.0 " + this.otherTexts.Calculator;
            // console.log(this.cvssConfigData);

        },

        db64(input) {
            return decodeURIComponent(escape(window.atob(input)));
        },

        splitObjectEntries(object, chunkSize) {
            arr = Object.entries(object)
            res = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                chunk = arr.slice(i, i + chunkSize)
                res.push(chunk)
            }
            return res
        }
    },
    computed: {
        vector() {
            value = "CVSS:4.0"
            for (metric in this.expectedMetricOrder) {
                selected = this.cvssSelected[metric]
                if (selected != "X") {
                    value = value.concat("/" + metric + ":" + selected)
                }
            }
            return value
        },
        score() {
            return cvss_score(
                this.cvssSelected,
                this.lookup,
                this.maxSeverityData,
                this.macroVector)
        },
        // qualScore() {
        //     if (this.score == 0) {
        //         return "None"
        //     }
        //     else if (this.score < 4.0) {
        //         return "Low"
        //     }
        //     else if (this.score < 7.0) {
        //         return "Medium"
        //     }
        //     else if (this.score < 9.0) {
        //         return "High"
        //     }
        //     else {
        //         return "Critical"
        //     }

        qualScore() {
            const severityTexts = this.severity_text;
            if (this.score == 0) {
              return severityTexts.none;
            } else if (this.score < 4.0) {
              return severityTexts.low;
            } else if (this.score < 7.0) {
              return severityTexts.medium;
            } else if (this.score < 9.0) {
              return severityTexts.high;
            } else {
              return severityTexts.critical;
            }
        },
    },
    beforeMount() {
        this.resetSelected()
    },
    mounted() {
        this.setButtonsToVector(window.location.hash)
        window.addEventListener("hashchange", () => {
            this.setButtonsToVector(window.location.hash)
        })

        const resizeObserver = new ResizeObserver(() => {
            this.header_height = document.getElementById('header').clientHeight
        })

        resizeObserver.observe(document.getElementById('header'))
    }
})

app.mount("#app");
