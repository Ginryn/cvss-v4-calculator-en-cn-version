// Copyright FIRST, Red Hat, and contributors
// SPDX-License-Identifier: BSD-2-Clause

cvssConfigCn = {
  "基本指标": {
    "fill": "供应商",
    "metric_groups": {
      "利用难度指标": {
        "攻击向量 (AV)": {
          "tooltip": "此指标反映了漏洞被利用所需的条件情境。当攻击者在逻辑上和物理位置上越能远离目标，仍能成功利用脆弱系统时，该指标的值（以及因此导致的严重性等级）就会越高。其背后的假设是，能够跨越网络进行攻击的漏洞相比那些需要攻击者亲自接触设备（物理访问）才能利用的漏洞，理论上存在更多的潜在攻击者，因此应当视为具有更高的严重性。",
          "short": "AV",
          "options": {
            "网络 (N)": {
              "tooltip": "脆弱的系统与网络协议栈绑定在一起，潜在攻击者的范围超出了下面列出的其他所有选项，乃至包括整个互联网。这类漏洞通常被称为“可远程利用”，可以理解为攻击能够在网络层面上跨一个或多个跳转（例如，穿过一个或多个路由器）进行利用。",
              "value": "N"
            },
            "相邻 (A)": {
              "tooltip": "脆弱系统与协议栈相关联，但攻击在协议层级上局限于逻辑上相邻的拓扑结构。这意味着攻击必须从相同的共享近距离（例如，蓝牙、NFC或IEEE 802.11）或逻辑网络（例如，本地IP子网）发起，或是从安全的或其他受限的管理域内部发起（例如，MPLS、管理网络区域内的安全VPN）。",
              "value": "A"
            },
            "本地 (L)": {
              "tooltip": "脆弱的系统不受网络协议栈限制，攻击者通过读/写/执行的能力来实现攻击路径。攻击者要么通过本地访问目标系统来利用此漏洞（例如，通过键盘、控制台），要么通过终端模拟方式（例如，SSH）；或者，攻击者依赖于其他人员的用户交互来完成利用漏洞所需的行动（例如，利用社会工程学技巧诱骗合法用户打开恶意文档）。",
              "value": "L"
            },
            "物理访问 (P)": {
              "tooltip": "此类攻击需要攻击者对脆弱系统进行物理接触或操控。物理交互可能短暂（例如，邪恶女仆攻击）或持续存在。",
              "value": "P"
            }
          },
          "selected": "N"
        },
        "攻击复杂度 (AC)": {
          "tooltip": "该指标旨在衡量攻击者为成功绕过或规避已内置的安全增强条件以获取可操作的漏洞利用所必须采取的可度量行动。这些条件的主要目的是提高安全性或增加漏洞利用的技术复杂度。如果一个漏洞能在无需针对特定目标变量的情况下被利用，则其复杂度低于那些需要非琐碎定制的漏洞。这一指标用于捕捉脆弱系统所采用的安全机制。",
          "short": "AC",
          "options": {
            "低 (L)": {
              "tooltip": "攻击者无需采取任何可度量的行动来利用漏洞。攻击无需针对特定目标的规避手段即可利用漏洞。攻击者可以预期对脆弱系统实施重复且成功的攻击。",
              "value": "L"
            },
            "高 (H)": {
              "tooltip": "成功的攻击依赖于规避或绕过已实施的安全增强技术，这些技术原本可能会阻碍攻击。其中包括：\n规避漏洞缓解技术：例如，为了使攻击成功，必须绕过地址空间布局随机化(ASLR)或数据执行保护(DEP)等措施；\n获取目标特定密钥：攻击者在攻击能成功前，必须收集某些特定于目标的密钥。密钥是指任何无法仅通过侦察活动获得的信息。为了得到这个密钥，攻击者必须实施额外的攻击或破坏其他原本安全的防护措施（例如，可能需要知道一个密钥来破解加密通道）。这项操作对于每个被攻击的目标都必须单独执行。",
              "value": "H"
            }
          },
          "selected": "L"
        },
        "攻击要求 (AT)": {
          "tooltip": "此指标衡量的是脆弱系统所需的前提部署、运行条件或变量，这些条件或变量使得攻击成为可能。它们与增强安全性的技术和措施（参考“攻击复杂度”）不同，因为这些条件的主要目的并非明确地减轻攻击，而是作为脆弱系统部署与执行的自然结果而出现。",
          "short": "AT",
          "options": {
            "无 (N)": {
              "tooltip": "成功的攻击不依赖于脆弱系统的部署和执行条件。攻击者可以预期在所有或大多数存在漏洞的情况下，能够触及漏洞并执行利用代码。",
              "value": "N"
            },
            "存在 (P)": {
              "tooltip": "成功的攻击依赖于脆弱系统存在的特定部署和执行条件，这些条件促成了攻击的成功。具体包括：必须赢得竞态条件才能成功利用漏洞（攻击的成功与否取决于攻击者无法完全控制的执行条件，或者可能需要对单个目标多次发动攻击才能成功）；攻击者必须将自己插入到目标与受害者请求的资源之间的逻辑网络路径中（例如，需要中间人攻击者的漏洞）。",
              "value": "P"
            }
          },
          "selected": "N"
        },
        "特权要求 (PR)": {
          "tooltip": "此指标描述了攻击者在成功利用漏洞之前必须具备的权限级别。攻击者在攻击前获取特权凭证的方法（例如，免费试用账户）不属于本指标的考量范围。通常，如果攻击者可以在攻击过程中自行授予自己权限，那么自助式配置的账户不构成权限要求。",
          "short": "PR",
          "options": {
            "无 (N)": {
              "tooltip": "攻击者在攻击之前未获得授权，因此在实施攻击时，并不需要访问脆弱系统中的任何设置或文件。",
              "value": "N"
            },
            "低 (L)": {
              "tooltip": "攻击者需要具有基本功能的权限，这些功能通常限于单一低权限用户所拥有的设置和资源。或者，具有低权限的攻击者只能访问非敏感资源。",
              "value": "L"
            },
            "高 (H)": {
              "tooltip": "攻击者需要拥有对脆弱系统有重大（如，管理级）控制权的权限，这些权限允许完全访问脆弱系统的设置和文件。",
              "value": "H"
            }
          },
          "selected": "N"
        },
        "交互 (UI)": {
          "tooltip": "此指标衡量了除攻击者以外的人类用户参与成功攻陷脆弱系统的需求。它确定了漏洞是否能仅凭攻击者的意志就被利用，或者是否需要另一个用户（或用户启动的过程）以某种方式参与其中。",
          "short": "UI",
          "options": {
            "无 (N)": {
              "tooltip": "除了攻击者之外，脆弱系统可以在不需要任何用户参与即可被攻击者利用。",
              "value": "N"
            },
            "被动 (P)": {
              "tooltip": "成功利用此漏洞需要被攻击的用户需要有限地与脆弱系统和攻击者的有效载荷进行交互。这些交互被认为是无意的，不需要用户主动破坏脆弱系统中的保护措施。",
              "value": "P"
            },
            "主动 (A)": {
              "tooltip": "成功利用此漏洞要求目标用户执行与脆弱系统及攻击者负载相关的特定且有意识的交互，或者用户的交互行为会主动破坏防护机制，从而导致漏洞被利用。",
              "value": "A"
            }
          },
          "selected": "N"
        }
      },
      "脆弱系统影响度量": {
        "机密性 (VC)": {
          "tooltip": "此指标衡量了由于成功利用漏洞，对由脆弱系统管理的信息的机密性造成的影响。机密性指的是限制信息访问和披露仅限于授权用户，并防止未经授权的用户访问或泄露信息。",
          "short": "VC",
          "options": {
            "高 (H)": {
              "tooltip": "机密性完全丧失，导致脆弱系统中的所有信息都被泄露给攻击者。或者，仅获取了部分受限信息的访问权限，但泄露的信息直接且严重影响严重。例如，攻击者窃取了管理员密码或Web服务器的私有加密密钥。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "存在一定的机密性损失。攻击者获得了访问部分受限信息的权限，但他们不能控制获取到的是哪些信息，或者损失的信息量和类型是有限的。信息泄露不对脆弱系统造成直接且重大的损失。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "脆弱系统内部没有机密性损失。",
              "value": "N"
            }
          },
          "selected": "N"
        },
        "完整性 (VI)": {
          "tooltip": "此指标衡量成功利用漏洞对系统完整性的影响。完整性涉及信息的可靠性和真实性。当攻击者未经授权修改系统数据时，脆弱系统的完整性受到影响。当系统用户能够否认在系统环境下采取的关键操作（例如，由于日志记录不足）时，完整性也会受到影响。",
          "short": "VI",
          "options": {
            "高 (H)": {
              "tooltip": "存在完整性的完全丧失或保护的彻底失效。例如，攻击者能够修改受脆弱系统保护的任何/所有文件。或者，仅能修改部分文件，但恶意修改会对脆弱系统造成直接且严重的后果。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "数据修改是可能的，但攻击者无法控制修改的后果，或者修改的程度有限。数据修改不对脆弱系统造成直接且重大的影响。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "脆弱系统内部没有完整性损失。",
              "value": "N"
            }
          },
          "selected": "N"
        },
        "可用性 (VA)": {
          "tooltip": "此指标衡量由于成功利用漏洞对脆弱系统可用性造成的影响。虽然机密性和完整性影响指标适用于数据（例如，系统使用的信心、文件）丢失机密性或完整性的情况，但此指标指的是受影响系统自身可用性的丢失，比如网络服务（如web、数据库、电子邮件）的不可用。由于可用性涉及到信息资源的可访问性，消耗网络带宽、处理器周期或磁盘空间的攻击都会影响系统的可用性。",
          "short": "VA",
          "options": {
            "高 (H)": {
              "tooltip": "存在完全的可用性损失，导致攻击者能够完全拒绝访问脆弱系统中的资源；这种损失要么持续存在（攻击者继续进行攻击期间），要么持久存在（即使攻击完成，状况仍然持续）。或者，攻击者有能力拒绝部分可用性，但可用性的损失对脆弱系统造成直接且严重的后果（例如，攻击者无法中断现有连接，但可以阻止新连接；攻击者可以反复利用一个漏洞，每次成功攻击只会泄漏少量内存，但经过反复利用后会导致服务完全不可用）。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "性能降低或资源可用性出现中断。即使可以重复利用该漏洞，攻击者也无法完全拒绝向合法用户提供服务。脆弱系统中的资源要么一直部分可用，要么只在某些时间完全可用，但总体上对脆弱系统没有直接且严重的影响。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "脆弱系统内部的可用性没有受到影响。",
              "value": "N"
            }
          },
          "selected": "N"
        }
      },
      "后续系统影响度量": {
        "机密性 (SC)": {
          "tooltip": "此指标衡量了由于成功利用漏洞，对由后续系统管理的信息的机密性造成的影响。机密性涉及限制信息访问和披露仅限于授权用户，同时防止未经授权的用户访问或泄露信息。",
          "short": "SC",
          "options": {
            "高 (H)": {
              "tooltip": "在这种情况下，机密性完全丧失，导致后续系统中所有资源都被泄露给攻击者。或者攻击者只能获取到一些受限信息，但所披露的信息具有直接且严重的影响。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "存在一定程度的机密性损失。攻击者能够访问到一些受限信息，但他们无法控制具体获取到哪些信息，或者损失的信息量和类型受到了限制。信息的泄露并不会给后续系统带来直接且重大的损失。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "后续系统中没有机密性损失，或者所有的机密性影响都局限在了脆弱系统之内。",
              "value": "N"
            }
          },
          "selected": "N"
        },
        "完整性 (SI)": {
          "tooltip": "此指标衡量成功利用漏洞对后续系统完整性的冲击。完整性关乎信息的可靠性和真实性。当攻击者未经授权修改系统数据时，将影响后续系统的完整性。同样，如果系统用户能够否认在系统环境中执行的关键操作（例如，因为日志记录不充分），也会对完整性造成影响。",
          "short": "SI",
          "options": {
            "高 (H)": {
              "tooltip": "存在完整的完整性损失或保护机制完全失效的情况。举个例子，攻击者能够修改后续系统保护下的所有或任意文件。或者，即便只能修改一部分文件，但这种恶意修改也会给后续系统带来直接且严重的后果。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "数据修改虽有可能，但攻击者无法控制修改导致的后果，或者修改的程度受到限制。这种数据改动对后续系统并不造成直接且重大的影响。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "后续系统中没有完整性损失，或者所有完整性影响都局限于脆弱系统之内。",
              "value": "N"
            }
          },
          "selected": "N"
        },
        "可用性 (SA)": {
          "tooltip": "此指标衡量的是由于成功利用漏洞对后续系统（SUBSEQUENT SYSTEM）可用性造成的影响。机密性和完整性影响指标分别对应于系统所使用数据（如信息、文件）的机密性或完整性丢失，而该指标涉及的是受攻击系统自身可用性的丢失，例如网络服务（如网页、数据库、电子邮件）的中断。鉴于可用性关乎信息资源的可获取性，那些消耗网络带宽、处理器周期或磁盘空间的攻击均会影响系统的可用性。",
          "short": "SA",
          "options": {
            "高 (H)": {
              "tooltip": "存在完全的可用性损失，导致攻击者能够完全拒绝访问后续系统中的资源；这种拒绝状态可能是持续的（攻击者持续发动攻击期间），或者是持久的（即使攻击结束后情况依然存在）。另一种情况是，攻击者虽只能拒绝部分可用性，但可用性的缺失直接且严重地影响了后续系统（例如，攻击者无法打断现有连接，但能阻止新连接建立；攻击者能反复利用某一漏洞，每次成功攻击仅泄露少量内存，但多次利用后会导致服务完全不可用）。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "性能降低或资源可用性出现中断。即便可以重复利用该漏洞，攻击者仍无法完全拒绝向合法用户提供服务。后续系统中的资源要么始终处于部分可用状态，要么仅在某些时段完全可用，但总体上不对后续系统造成直接且重大的影响。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "后续系统中的可用性没有受到影响，或者所有可用性影响都局限于脆弱系统之内。",
              "value": "N"
            }
          },
          "selected": "N"
        }
      }
    }
  },
  "补充指标": {
    "fill": "供应商",
    "metric_groups": {
      "": {
        "人身安全 (S)": {
          "tooltip": "当一个系统确实有符合安全目的的预期用途或适用性时，利用该系统中的漏洞可能会对安全产生影响，这种影响可以通过补充指标组来表示。没有提供安全指标值并不意味着不存在任何与安全相关的潜在影响。",
          "short": "S",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "可忽略 (N)": {
              "tooltip": "该漏洞的后果符合IEC 61508标准中“可忽略”后果类别的定义。",
              "value": "N"
            },
            "存在 (P)": {
              "tooltip": "该漏洞的后果符合IEC 61508标准中“临界”、“关键”和“严重”的后果类别的定义",
              "value": "P"
            }
          },
          "selected": "X"
        },
        "自动化 (AU)": {
          "tooltip": "“自动化”指标根据杀伤链(Kill chain) [Hutchins等，2011]中的步骤1-4来回答以下问题：“攻击者能否自动化利用此漏洞对多个目标进行攻击？”这些步骤包括：侦察、武器化、投递、利用",
          "short": "AU",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "否 (N)": {
              "tooltip": "由于某些原因，攻击者无法可靠地为该漏洞的杀伤链全部四个步骤（侦察、武器化、投放和利用）实现自动化。。",
              "value": "N"
            },
            "是 (Y)": {
              "tooltip": "攻击者可以可靠地自动化杀伤链的所有四个步骤：侦察、武器化、投放和利用（例如，该漏洞可被制作成“蠕虫”）。",
              "value": "Y"
            }
          },
          "selected": "X"
        },
        "恢复性 (R)": {
          "tooltip": "恢复性（Recovery）描述了系统在遭受攻击后，从性能和可用性方面恢复服务的能力。这包括系统重新达到正常运行状态所需的时间、资源以及效率，体现了系统抵御攻击并恢复正常服务的韧性。",
          "short": "R",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "自动 (A)": {
              "tooltip": "系统在遭受攻击后能自动恢复服务。",
              "value": "A"
            },
            "手动 (U)": {
              "tooltip": "系统在遭受攻击后需要用户手动介入以恢复服务。",
              "value": "U"
            },
            "不可恢复 (I)": {
              "tooltip": "系统在遭受攻击后，用户无法恢复其服务。",
              "value": "I"
            }
          },
          "selected": "X"
        },
        "价值密度 (V)": {
          "tooltip": "价值密度描述的是攻击者通过单次利用事件将获得控制权的资源。",
          "short": "V",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "分散型 (D)": {
              "tooltip": "系统存在脆弱性且资源有限。这意味着攻击者通过一次利用事件所能控制的资源相对较小。分散型（思考：有限）价值密度的一个例子是对单个电子邮件客户端漏洞的攻击。",
              "value": "D"
            },
            "集中型 (C)": {
              "tooltip": "该脆弱系统资源丰富。经验上讲，这类系统通常直接由“系统运营商”而非用户负责管理。集中型（思考：广泛）价值密度的一个例子是针对中央邮件服务器的攻击。",
              "value": "C"
            }
          },
          "selected": "X"
        },
        "漏洞响应难度 (RE)": {
          "tooltip": "漏洞响应难度”的目的是为了提供额外信息，说明客户在基础设施中对已部署产品和服务的漏洞影响进行初步响应的难度。这样一来，客户在采取缓解措施和/或安排修复时，可以将所需努力的这一附加信息纳入考虑范围",
          "short": "RE",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "低 (L)": {
              "tooltip": "应对漏洞所需的努力是低/微不足道的。示例包括：更好的文档通信、配置解决办法，或者供应商的指南，这些并不要求消费实体立即更新、升级或替换，例如防火墙过滤器配置。",
              "value": "L"
            },
            "中 (M)": {
              "tooltip": "响应所需要的工作量适中，应对漏洞所需的动作需要客户付出一些努力，并可能对实施产生最小的服务影响。示例包括：简单的远程更新、禁用子系统，或低接触软件升级，如驱动程序更新。",
              "value": "M"
            },
            "高 (H)": {
              "tooltip": "应对漏洞所需的行动重大且/(或)困难，可能会导致延长的、预定的服务影响。这需要考虑到调度的目的，包括尊重对所选响应的发布禁令。或者，无法远程响应现场的漏洞。解决漏洞的唯一方法涉及物理替换（例如，部署的单位必须被召回以进行仓库级别的修理或替换）。示例包括：高权限驱动程序更新、微代码或UEFI BIOS更新，或者需要仔细分析和理解任何潜在的基础设施影响的软件升级。对UEFI BIOS的更新可能会影响Trusted Platform Module（TPM）的认证，但不影响磁盘加密软件，比如Bit locker，这是一个最近的好例子。无法修复的故障，如无法启动的闪存子系统、失败的硬盘或固态硬盘（SSD）、坏的内存模块、网络设备，或其他无法在保修期内恢复的硬件，也应被评为需要高度努力。",
              "value": "H"
            }
          },
          "selected": "X"
        },
        "供应商紧急性 (U)": {
          "tooltip": "为了促进一种标准化的方法来纳入额外的供应商提供的评估，这里有一个可选的“直通”补充指标，称为供应商紧急性。注意：虽然产品供应链上的任何评估供应商都可以提供供应商紧急性评级。但倒数第二个产品提供商（PPP）最有资格提供供应商紧急性的直接评估。",
          "short": "U",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "无": {
              "tooltip": "供应商已评估该漏洞的影响为无紧急性（信息性）。",
              "value": "Clear"
            },
            "低": {
              "tooltip": "供应商已评估该漏洞的影响为有较低的紧急性。",
              "value": "Green"
            },
            "中": {
              "tooltip": "供应商已评估该漏洞的影响为有中等的紧急性。",
              "value": "Amber"
            },
            "高": {
              "tooltip": "供应商已评估该漏洞的影响为有最高的紧急性。",
              "value": "Red"
            }
          },
          "selected": "X"
        }
      }
    }
  },
  "环境(修改的基本指标)": {
    "fill": "客户",
    "metric_groups": {
      "可利用性指标": {
        "攻击向量 (MAV)": {
          "tooltip": "这些度量标准使客户分析师能够根据用户环境的特定特征来覆盖个别基础度量值。此度量反映了可能发生漏洞利用的上下文。该度量值（以及相应的严重性结果）将基于攻击者在逻辑上和物理上能够越远地利用易受攻击的系统而越大。假设网络中可能利用漏洞的潜在攻击者数量大于需要物理接触设备才能利用漏洞的潜在攻击者数量，因此应被赋予更大的严重性。",
          "short": "MAV",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "网络 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            },
            "相邻 (A)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "A"
            },
            "本地 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "物理 (P)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "P"
            }
          },
          "selected": "X"
        },
        "攻击复杂度 (MAC)": {
          "tooltip": "此度量标准使客户分析师能根据用户环境的特定特点覆盖单个基础度量值。此度量标准捕捉攻击者为获取可行的攻击手段，需要采取的主动规避或绕过现有内建安全增强条件的可衡量行动。这些是以增加安全性和/或提高攻击工程复杂性为主要目的的条件。一个无须针对特定目标变量就可利用的漏洞比需要非琐碎定制的漏洞的复杂性更低。此度量标准旨在捕捉易受攻击系统所使用的安全机制。",
          "short": "MAC",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            }
          },
          "selected": "X"
        },
        "攻击要求 (MAT)": {
          "tooltip": "此类度量标准使客户分析师能根据用户环境的特定特点覆盖单个基础度量值。此度量标准捕捉易受攻击系统的先决部署和执行条件或变量，从而使攻击成为可能。这些与安全增强技术/技术（参考攻击复杂性）不同，因为这些条件的主要目的并非明确地缓解攻击，而是作为部署和执行易受攻击系统的自然后果出现。",
          "short": "MAT",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "无 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            },
            "存在 (P)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "P"
            }
          },
          "selected": "X"
        },
        "所需权限 (MPR)": {
          "tooltip": "此类度量标准使客户分析师能根据用户环境的特定特点覆盖单个基础度量值。此度量标准描述了攻击者在成功利用漏洞之前必须拥有的权限级别。攻击者在攻击前获得特权凭据的方法（例如，免费试用账户）不在此度量标准的范围内。通常，如果攻击者可以在攻击过程中授予自己权限，那么自助式配置的账户不构成权限要求。",
          "short": "MPR",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "无 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            }
          },
          "selected": "X"
        },
        "用户交互 (MUI)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特征覆盖个别基本指标的值。该指标捕捉到除了攻击者之外，其他人类用户成功利用易受攻击的系统时的参与要求。该指标确定了漏洞是否可以完全由攻击者自行利用，或者是否需要一个单独的用户（或用户启动的过程）以某种方式参与。",
          "short": "MUI",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "无 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            },
            "被动 (P)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "P"
            },
            "主动 (A)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "A"
            }
          },
          "selected": "X"
        }
      },
      "易受攻击系统影响指标": {
        "机密性 (MVC)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特征覆盖个别基本指标的值。这个指标衡量了由于成功利用漏洞对易受攻击系统管理的信息的机密性的影响。机密性是指仅限授权用户访问和披露信息，以及防止非授权用户访问或披露信息。",
          "short": "MVC",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            }
          },
          "selected": "X"
        },
        "完整性 (MVI)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特征覆盖个别基本指标的值。这个指标衡量了成功利用漏洞对完整性的影响。完整性是指信息的可信赖性和真实性。当攻击者未经授权地修改系统数据时，会影响易受攻击系统的完整性。当系统用户可以否认在系统上下文中采取的关键行动（例如，由于记录不足）时，也会影响完整性。",
          "short": "MVI",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            }
          },
          "selected": "X"
        },
        "可用性 (MVA)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特征覆盖个别基本指标的值。此指标衡量了成功利用漏洞对易受攻击系统可用性的影响。虽然机密性和完整性影响指标适用于系统使用的数据（例如，信息，文件）的机密性或完整性的丧失，但这个指标指的是受影响系统本身的可用性的丧失，例如网络服务（例如，网络，数据库，电子邮件）。由于可用性是指信息资源的可访问性，因此消耗网络带宽，处理器周期，或磁盘空间的攻击都会影响系统的可用性。",
          "short": "MVA",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "无 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            }
          },
          "selected": "X"
        }
      },
      "后续系统影响性": {
        "机密性 (MSC)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特性来覆盖单个基础度量值。这个指标衡量了由于成功利用漏洞对由随后系统管理的信息的机密性的影响。机密性是指将信息访问和披露限制在只有授权用户，以及防止未经授权的用户访问或披露。",
          "short": "MSC",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "": {
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "可忽略 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            },
          },
          "selected": "X"
        },
        "完整性 (MSI)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特性来覆盖单个基础度量值。这个指标衡量了由于成功利用漏洞对随后系统的完整性的影响。完整性是指信息的可信度和真实性。当攻击者对系统数据进行未授权的修改时，随后系统的完整性就会受到影响。当系统用户可以否认在系统环境中采取的关键行动时（例如，由于记录不足），完整性也会受到影响。除了为被关注系统定义的逻辑系统外，随后系统还可以包括对人的影响。",
          "short": "MSI",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "影响人身安全 (S)": {
              "tooltip": "如果利用的漏洞会对人类参与者造成严重伤害或更严重后果(如IEC 61508中描述的“临界”或更糟的类别)，则会对完整性产生影响。",
              "value": "S"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "可忽略 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            }
          },
          "selected": "X"
        },
        "可用性 (MSA)": {
          "tooltip": "这些指标使客户分析师能够根据用户环境的特定特性来覆盖单个基础度量值。这个指标衡量了由于成功利用漏洞对随后系统的可用性的影响。虽然保密性和完整性影响度量适用于系统使用的数据（例如，信息，文件）的保密性或完整性的损失，但该度量指的是受影响系统本身的可用性的损失，例如网络服务（例如，网络，数据库，电子邮件）。因为可用性是指信息资源的可访问性，所以消耗网络带宽、处理器周期或磁盘空间的攻击都会影响系统的可用性。除了为被关注系统定义的逻辑系统外，随后系统还可以包括对人的影响。",
          "short": "MSA",
          "options": {
            "未定义 (X)": {
              "tooltip": "该指标尚未进行评估。",
              "value": "X"
            },
            "影响人身安全 (S)": {
              "tooltip": "利用此漏洞将导致可用性影响，可能造成严重伤害甚至更糟的情况（如IEC 61508中所描述的“临界”或更差类别），对人类操作者或参与者产生影响。",
              "value": "S"
            },
            "高 (H)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "H"
            },
            "低 (L)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "L"
            },
            "可忽略 (N)": {
              "tooltip": "此度量标准的值与上述基础度量值的定义相同。",
              "value": "N"
            }
          },
          "selected": "X"
        }
      }
    }
  },
  "环境(安全要求)": {
    "fill": "客户",
    "metric_groups": {
      "": {
        "机密性要求 (CR)": {
          "tooltip": "该指标使客户能够根据受影响的IT资产对分析师所在组织的重要性进行定制评估，以保密性为度量。也就是说，如果一个IT资产支持一个业务功能，其中保密性最重要，那么分析师可以为保密性度量分配更大的值，相对于完整性和可用性。",
          "short": "CR",
          "options": {
            "未定义 (X)": {
              "tooltip": "分配此值表示没有足够的信息来选择其他值，并且不会对整体环境分数产生影响",
              "value": "X"
            },
            "高 (H)": {
              "tooltip": "机密性的丧失可能对组织或与组织相关的个人产生灾难性的不利影响。",
              "value": "H"
            },
            "中 (M)": {
              "tooltip": "机密性的丧失可能对组织或与组织相关的个人产生严重的不利影响。",
              "value": "M"
            },
            "低 (L)": {
              "tooltip": "机密性的丧失可能仅对组织或与组织相关的个人产生有限的不利影响。",
              "value": "L"
            }
          },
          "selected": "X"
        },
        "完整性要求 (IR)": {
          "tooltip": "该指标使客户能够根据受影响的IT资产对分析师所在组织的重要性进行自定义评估，以完整性为衡量标准。换句话说，如果某个IT资产支持的业务功能对完整性最为重要，分析师可以相对于机密性和可用性给予完整性指标更高的权重。",
          "short": "IR",
          "options": {
            "未定义 (X)": {
              "tooltip": "分配这个值表示没有足够的信息来选择其他值之一，并且对整体环境评分没有影响。",
              "value": "X"
            },
            "高 (H)": {
              "tooltip": "完整性的丧失可能对组织或与组织相关的个人产生灾难性的不利影响。",
              "value": "H"
            },
            "中 (M)": {
              "tooltip": "完整性的丧失可能对组织或与组织相关的个人产生灾难性的不利影响。",
              "value": "M"
            },
            "低 (L)": {
              "tooltip": "完整性的丧失可能仅对组织或与组织相关的个人产生有限的不利影响。",
              "value": "L"
            }
          },
          "selected": "X"
        },
        "可用性要求 (AR)": {
          "tooltip": "该此指标使客户分析师可以根据受影响的IT资产对分析师所在组织的重要性（以可用性来衡量）来定制评估。也就是说，如果一个IT资产支持一个业务功能，对于这个业务功能，可用性是最重要的，那么分析师可以相对于保密性和完整性给予可用性指标更高的价值。",
          "short": "AR",
          "options": {
            "未定义 (X)": {
              "tooltip": "分配这个值表示没有足够的信息来选择其他值之一，并且对整体环境评分没有影响。",
              "value": "X"
            },
            "高 (H)": {
              "tooltip": "可用性的丧失可能对组织或与组织相关的个人产生灾难性的不利影响。",
              "value": "H"
            },
            "中 (M)": {
              "tooltip": "可用性的丧失可能对组织或与组织相关的个人产生严重的不利影响。",
              "value": "M"
            },
            "低 (L)": {
              "tooltip": "可用性的丧失可能仅对组织或与组织相关的个人产生有限的不利影响。",
              "value": "L"
            }
          },
          "selected": "X"
        }
      }
    }
  },
  "威胁指标": {
    "fill": "客户",
    "metric_groups": {
      "": {
        "利用情报 (E)": {
          "tooltip": "该指标衡量了漏洞受到攻击的可能性，通常基于当前的利用技术、利用代码的可用性或实际的“在野”攻击情况。根据有关利用代码/过程的可用性和攻击技术状态的信息，CVSS的客户有责任填写攻击情报（E）的值。这些信息通常被称为“威胁情报”。",
          "short": "E",
          "options": {
            "未定义 (X)": {
              "tooltip": "未使用利用成熟度度量。无法得到可靠的威胁情报来确定利用成熟度特性。",
              "value": "X"
            },
            "在野利用 (A)": {
              "tooltip": "基于威胁情报来源，必须适用以下任一条件：\n· 已经报道了针对此漏洞的攻击（尝试或成功）\n· 公开或私下可用的简化利用漏洞尝试的解决方案（如利用工具包）。",
              "value": "A"
            },
            "概念验证 (P)": {
              "tooltip": "基于威胁情报来源，必须适用以下所有条件：\n· 公开可用的概念验证\n· 没有知道有报道过尝试利用此漏洞的情况\n· 没有知道公开可用的用于简化尝试利用漏洞的解决方案”。",
              "value": "P"
            },
            "无报告 (U)": {
              "tooltip": "基于威胁情报来源，必须适用以下所有条件：\n· 没有知道公开可用的概念验证\n· 没有知道有报道过尝试利用此漏洞的情况\n· 没有知道公开可用的用于简化尝试利用漏洞的解决方案”。",
              "value": "U"
            }
          },
          "selected": "X"
        }
      }
    }
  }
}

button_texts_cn = {
  reset: '重置',
  switchLanguage: 'Change to English/切换至英文'
}

other_texts_cn=
{
  Calculator : '计算器',
  Score : '分数',
  Clipboard : '点击复制 得分/级别（CVSS版本/向量）',
  Show_details : '显示详细信息',
  Hide_details : '隐藏详细信息',
  None : '无',
  Base_metrics_des: '此类别通常由',
  Base_metrics_des_end: '填写',
  Right_parenthesis :'）',
  Left_parenthesis :'（'
}

severity_text_cn= {
  none: '无',
  low: '低',
  medium: '中',
  high: '高',
  critical: '严重',
}