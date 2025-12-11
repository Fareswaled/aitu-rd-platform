exports.handler = async function(event, context) {
    // === قاعدة البيانات السرية (محدش يقدر يشوفها غيرك) ===
    const secureTasksDB = {
        // --- مادة Circuit ---
        "circuit-t1": { 
            link: "https://drive.google.com/file/d/1v3YbAxziGV25FRSN3txIzzY30_rjVGr8/view?usp=drive_link", 
            date: "2025-12-04T09:00:00" 
        },
        "circuit-t2": { 
            link: "https://drive.google.com/file/d/1GI0WywVRBuRrv4g_MupNc1LGmxu_KfFC/view?usp=drive_link", 
            date: "2025-12-11T09:00:00" 
        },
        "circuit-t3": { 
            link: "https://drive.google.com/file/d/19a2Wha6hbHk2a3tvP5-pR3KXqh9hg1ci/view?usp=drive_link", 
            date: "2026-01-29T09:00:00" 
        },
        "circuit-t4": { 
            link: "https://drive.google.com/file/d/1jRRWJ6n9MgZ25ZRp6-RbAq1QHs2oXTmH/view?usp=drive_link", 
            date: "2026-02-06T09:00:00" 
        },

        // --- مادة Python ---
        "python-t1": { 
            link: "https://drive.google.com/file/d/1wmjAQGy_dbkm0sfzMEvyRbcE7plJkCsZ/view?usp=drive_link", 
            date: "2025-12-09T09:00:00" 
        },
        "python-t2": { 
            link: "https://drive.google.com/file/d/160qOySdST0wyNTgBDah63MHYNboTLJko/view?usp=drive_link", 
            date: "2026-01-31T09:00:00" 
        },
        "python-t3": { 
            link: "https://drive.google.com/file/d/1nAog3v-HSPdh48AUUCHOT6JCQOuUCU4y/view?usp=drive_link", 
            date: "2026-02-08T09:00:00" 
        },
        "python-t4": { 
            link: "https://drive.google.com/file/d/1AAccMfRdS8W_ZBlvQFyMHRFm02kJ-OdK/view?usp=drive_link", 
            date: "2026-02-15T09:00:00" 
        },

        // --- مادة Devices ---
        "devices-t1": { 
            link: "https://drive.google.com/file/d/1vudEm-D1oUQPUAob1uUiubhwAM7A3T4b/view?usp=drive_link", 
            date: "2025-12-04T09:00:00" 
        },
        "devices-t2": { 
            link: "https://drive.google.com/file/d/17aQ5tHPGbrQwiC3giLOL1CuTYhaJIAPl/view?usp=drive_link", 
            date: "2026-02-04T09:00:00" 
        },

        // --- مادة C Programming ---
        "c-t1": { 
            link: "https://drive.google.com/file/d/1gBvKpocecTO8NhLkl1nadSdR1wbW3L24/view?usp=drive_link", 
            date: "2025-12-11T09:00:00" 
        },
        "c-t2": { 
            link: "https://drive.google.com/file/d/10oCjZYyXaYGKVX91zPRGvNQFNBe4Zujg/view?usp=drive_link", 
            date: "2026-01-26T09:00:00" 
        },
        "c-t3": { 
            link: "https://drive.google.com/file/d/1LuEUpH89w0qIikZ2AIl5oGoOHQQg74w2/view?usp=drive_link", 
            date: "2026-02-03T09:00:00" 
        },

        // --- مادة Arduino ---
        "arduino-t1": { 
            link: "https://drive.google.com/file/d/1dQRDEccbbnq9t40cp6RcPArpUUIElQhc/view?usp=drive_link", 
            date: "2026-01-26T09:00:00" 
        },
        "arduino-t2": { 
            link: "https://drive.google.com/file/d/148myzQP0jcmoqcbsMhr5U-HctHnKIdDx/view?usp=drive_link", 
            date: "2026-02-02T09:00:00" 
        },
        "arduino-t3": { 
            link: "https://drive.google.com/file/d/1yCkyMd1uCUdgCd4ZG8mo36qgURvdDQM-/view?usp=drive_link", 
            date: "2026-02-09T09:00:00" 
        },
        "arduino-t4": { 
            link: "https://drive.google.com/file/d/1ILq8aOzmB_YW3PzMIAOhRDbzJUYC0b7Y/view?usp=drive_link", 
            date: "2026-02-16T09:00:00" 
        },

        // --- مادة PCB Design ---
        "pcb-t1": { 
            link: "https://drive.google.com/file/d/1ucXAfUJjp1RL06pPjxC9nlY82YkANNxy/view?usp=drive_link", 
            date: "2026-01-30T09:00:00" 
        },
        "pcb-t2": { 
            link: "https://drive.google.com/file/d/13FUElD2cAFbNhtbWpDOxdG0xuq0h1Iaj/view?usp=drive_link", 
            date: "2026-02-09T09:00:00" 
        }
    };

    // استلام الطلب
    const taskID = event.queryStringParameters.id;
    const task = secureTasksDB[taskID];

    // لو التاسك مش موجود
    if (!task) {
        return { statusCode: 404, body: JSON.stringify({ allowed: false, error: "Not Found" }) };
    }

    const now = new Date();
    const releaseDate = new Date(task.date);

    // التحقق من التاريخ
    if (now >= releaseDate) {
        // مسموح: خد اللينك يا بطل
        return {
            statusCode: 200,
            body: JSON.stringify({ allowed: true, url: task.link })
        };
    } else {
        // ممنوع: خد التاريخ بس (من غير لينك)
        return {
            statusCode: 200,
            body: JSON.stringify({ allowed: false, date: task.date })
        };
    }
};