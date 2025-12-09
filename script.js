// ===== بيانات المواد والتاسكات =====
const globalFormLink = "https://forms.gle/azG5H2vJ1YS4iVG56";
const subjects = [
{
        id: 1,
        name: "Circuit",
        icon: '<img src="Circuits.png" alt="Subject Icon" class="subject-icon-img">',
        description: "Electronic circuit design and analysis",
        tasks: 
    [
        { 
            id: 1, title: "Task 1: Fundamentals of Ohm’s Law ", 
            description: "Explore Ohm’s Law and learn how resistor and capacitor networks behave in series and parallel connections.",
            driveLink: "https://drive.google.com/file/d/1v3YbAxziGV25FRSN3txIzzY30_rjVGr8/view?usp=drive_link",
            formLink: globalFormLink,
            releaseDate: "2025-12-04T09:00:00" 
        },
        { 
            id: 2, title: "Task 2: Simulation & Practical Circuit Assembly Basics", 
            description: "Learn how to build and simulate circuits on a breadboard using Tinkercad, and study essential components such as diodes and capacitors.", 
            driveLink: "https://drive.google.com/file/d/1GI0WywVRBuRrv4g_MupNc1LGmxu_KfFC/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2025-12-11T09:00:00" 
        },
        { 
            id: 3, title: "Task 3: Transistors, 555 Timer, and PWM Control Circuits", 
            description: "Understand the role of transistors in switching and amplification, get introduced to the 555 timer IC, and explore H-Bridge and PWM control circuits.", 
            driveLink: "https://drive.google.com/file/d/19a2Wha6hbHk2a3tvP5-pR3KXqh9hg1ci/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-01-29T09:00:00" 
        },
        { 
            id: 4, title: "Task 4: Advanced PWM Applications & Creative 555 Timer Uses", 
            description: "Dive deeper into PWM control techniques and explore practical and innovative applications of the 555 timer in electronic circuits.", 
            driveLink: "https://drive.google.com/file/d/1jRRWJ6n9MgZ25ZRp6-RbAq1QHs2oXTmH/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-06T09:00:00" 
        }
    ]
},
{
        id: 2,
        name: "Python",
        icon: '<img src="Python.png" alt="Subject Icon" class="subject-icon-img">',
        description: "Python programming for automation",
        tasks: 
    [
        { 
            id: 1, title: "Task 1: Fundamentals of Logic, Math Operations & Basic Python Processing", 
            description: "Practice essential Python skills through logic-based problems covering variable manipulation, date handling, list operations, geometry, and mathematical computation without using conditional statements.",
            driveLink: "https://drive.google.com/file/d/1wmjAQGy_dbkm0sfzMEvyRbcE7plJkCsZ/view?usp=drive_link",
            formLink: globalFormLink,
            releaseDate: "2025-12-09T09:00:00" // الثلاثاء 9 ديسمبر
        },
        { 
            id: 2, title: "Task 2: Loops, Patterns, and Manual Binary Conversion", 
            description: "ULearn how to use loops to generate patterns, convert decimal numbers to binary manually, and analyze sentences by counting letters and digits without built-in functions.", 
            driveLink: "https://drive.google.com/file/d/160qOySdST0wyNTgBDah63MHYNboTLJko/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-01-31T09:00:00" // السبت 31 يناير
        },
        { 
            id: 3, title: "Task 3: Bitwise Logic & String Processing Essentials", 
            description: "Work with string slicing, parsing techniques, and use bitwise operators to determine number properties while maintaining clean, well-commented code.", 
            driveLink: "https://drive.google.com/file/d/1nAog3v-HSPdh48AUUCHOT6JCQOuUCU4y/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-08T09:00:00" // الاحد 8 فبراير 
        },
        { 
            id: 4, title: "Task 4: Object-Oriented Programming & NumPy Operations", 
            description: "Explore OOP in Python by implementing real-world employee models, then perform matrix operations, reshaping techniques, and array manipulation using NumPy.", 
            driveLink: "https://drive.google.com/file/d/1AAccMfRdS8W_ZBlvQFyMHRFm02kJ-OdK/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-15T09:00:00" // الاحد 15 فبراير
        }
    ]
},
{
        id: 3,
        name: "Devices",
        icon: '<img src="Devices.png" alt="Subject Icon" class="subject-icon-img">',
        description: "IoT and embedded devices",
       tasks: 
    [
            
        { 
            id: 1, title: "Task 1: Introduction to Electrical Measurement Tools & Power Sources", 
            description: "Learn the fundamentals of multimeters, battery technologies, and power supplies through selected videos that explain their construction, types, and practical usage.",
            driveLink: "https://drive.google.com/file/d/1vudEm-D1oUQPUAob1uUiubhwAM7A3T4b/view?usp=drive_link",
            formLink: globalFormLink,
            releaseDate: "2025-12-04T09:00:00" // تاريخ قديم (مفتوح) 
        },
            
        { 
            id: 2, title: "Task 2: Soldering, Connectors, and Basic Lab Tools", 
            description: "Understand essential hardware skills including soldering techniques, RJ45 wiring, connectors, and basic oscilloscope usage through guided video demonstrations.", 
            driveLink: "https://drive.google.com/file/d/17aQ5tHPGbrQwiC3giLOL1CuTYhaJIAPl/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-04T09:00:00" // الاربعاء 4 فبراير 
        }
        
    ]
},
{
        id: 4,
        name: "C Programming",
        icon: '<img src="C programming.png" alt="Subject Icon" class="subject-icon-img">',
        description: "C language for embedded systems",
        tasks: 
    [
            
        { 
            id: 1, title: "Task 1: Core Data Types, Bitwise Logic, and Control Structures", 
            description: "Master the fundamentals of C data representation, explore bitwise manipulation techniques, and implement robust control flow using loops and switch statements to solve algorithmic problems.",
            driveLink: "https://drive.google.com/file/d/1gBvKpocecTO8NhLkl1nadSdR1wbW3L24/view?usp=drive_link",
            formLink: globalFormLink,
            releaseDate: "2025-12-11T09:00:00" // الخميس 11 ديسمبر 
        },
        { 
            id: 2, title: "Task 2: Memory Manipulation, Array Algorithms, and String Processing", 
            description: "Delve into direct memory access using pointers, implement sorting and matrix algorithms on 1D/2D arrays, and develop low-level string manipulation functions without standard library dependencies.", 
            driveLink: "https://drive.google.com/file/d/10oCjZYyXaYGKVX91zPRGvNQFNBe4Zujg/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-01-26T09:00:00" // الاثنين 26 يناير 
        },
            
        { 
            id: 3, title: "Task 3: User-Defined Data Structures, Unions, and Preprocessor Directives", 
            description: "Engineer complex data models using Structures and Enums, optimize memory usage with Unions and padding control, and utilize preprocessor directives for efficient conditional compilation and macro definitions.", 
            driveLink: "https://drive.google.com/file/d/1LuEUpH89w0qIikZ2AIl5oGoOHQQg74w2/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-03T09:00:00" // الثلاثاء 3 فبراير 
        }
    ]
},
{
        id: 5,
        name: "Arduino",
        icon: '<img src="Arduino.png" alt="Subject Icon" class="subject-icon-img">',
        description: "Arduino microcontroller programming",
        tasks: 
    [
            
        { 
            id: 1, title: "Task 1: Arduino Platform Fundamentals and Initial Project Setup", 
            description: "Gain a comprehensive overview of the Arduino board architecture, components, and advantages. Set up your hardware and software environment, and execute your first hands-on project using basic Arduino functions via simulation (Tinkercad).",
            driveLink: "https://drive.google.com/file/d/1dQRDEccbbnq9t40cp6RcPArpUUIElQhc/view?usp=drive_link",
            formLink: globalFormLink,
            releaseDate: "2026-01-26T09:00:00" // الاثنين 26 يناير
        },
        { 
            id: 2, title: "Task 2: Sensor Interfacing, Analog Signals, and Serial Communication", 
            description: "Familiarize yourself with various sensor types, understand the concept and applications of analog signals, and master serial communication protocols to display real-time sensor data on an LCD or 7-Segment display.", 
            driveLink: "https://drive.google.com/file/d/148myzQP0jcmoqcbsMhr5U-HctHnKIdDx/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-02T09:00:00" // الاثنين 2 فبراير
        },
        { 
            id: 3, title: "Task 3: Actuators and Input Device Integration", 
            description: "Explore the operation of DC motors and their associated motor drivers, control the precise movement of servo motors, and learn how to interface the Arduino with external user input devices like a keypad.", 
            driveLink: "https://drive.google.com/file/d/1yCkyMd1uCUdgCd4ZG8mo36qgURvdDQM-/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-09T09:00:00" // الاثنين 9 فبراير
        },
        { 
            id: 4, title: "Task 4: Advanced Storage, Display Management, and Wireless Control", 
            description: "Introduce internal EEPROM for non-volatile data storage, implement multi-tasking on LCD displays for enhanced user interface, and establish control over the Arduino using an Infrared (IR) remote control.", 
            driveLink: "https://drive.google.com/file/d/1ILq8aOzmB_YW3PzMIAOhRDbzJUYC0b7Y/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-16T09:00:00" // الاثنين 16 فبراير
        }
    ]
},
{
        id: 6,
        name: "PCB Design",
        icon: '<img src="PCB.png" alt="Subject Icon" class="subject-icon-img">',
        description: "PCB layout and design",
        tasks: 
    [
            
        {
            id: 1, title: "Task 1: Schematic Capture and Component Footprint Assignment", 
            description: "Design and capture the detailed schematic for a functional 8-LED Chaser Circuit (using 555 Timer and CD4017 ICs). The task includes component selection and accurately assigning PCB footprints using professional design software.",
            driveLink: "https://drive.google.com/file/d/1ucXAfUJjp1RL06pPjxC9nlY82YkANNxy/view?usp=drive_link",
            formLink: globalFormLink,
            releaseDate: "2026-01-30T09:00:00" // الجمعة 30 يناير 
        },
        { id: 2, title: "Task 2: PCB Layout, Routing, and Mechanical Design", 
            description: "Transition from the schematic to the physical layout. Focus on optimal component placement, define appropriate track widths (1.0 mm) and spacing (0.6 mm) for routing, and finalize the mechanical design including mounting holes.", 
            driveLink: "https://drive.google.com/file/d/13FUElD2cAFbNhtbWpDOxdG0xuq0h1Iaj/view?usp=drive_link", 
            formLink: globalFormLink,
            releaseDate: "2026-02-09T09:00:00" // الاثنين 9 فبراير 
        }
        
    ]
    
}

];

// ===== بيانات المشاريع =====
const projects = [
    {
        id: 1,
        name: "Autonomous Robot Rover",
        description: "A self-driving robot capable of obstacle detection",
        fullDescription: "This project involves building an autonomous robot that can navigate through complex environments using advanced sensors and AI algorithms. The rover is equipped with LiDAR, cameras, and IMU sensors for real-time obstacle detection and path planning.",
        image: "https://images.unsplash.com/photo-1561557404-acd6b9d5d5ff?w=600&h=400&fit=crop",
        status: "In Progress",
        report: `
            <h3>Project Report: Autonomous Robot Rover</h3>
            <p><strong>Objective:</strong> Design and build a fully autonomous robot capable of navigating complex environments without human intervention.</p>
            <h4>Technical Specifications:</h4>
            <ul>
                <li>LiDAR Sensor: 360° real-time mapping</li>
                <li>Processing Unit: NVIDIA Jetson Xavier</li>
                <li>Motor System: 4-wheel differential drive</li>
                <li>Battery: 48V LiFePO4 battery pack</li>
                <li>Software: ROS-based autonomous navigation</li>
            </ul>
            <h4>Progress:</h4>
            <p>Currently in Phase 2 with hardware assembly completed. Software integration and testing in progress. Expected completion: Q3 2025</p>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        team: ["Ahmed Hassan", "Omar Khalil", "Layla Ibrahim"],
        technologies: ["ROS", "Python", "C++", "LiDAR", "Computer Vision"]
    },
    {
        id: 2,
        name: "IoT Smart Home System",
        description: "An integrated smart home automation system",
        fullDescription: "Building a comprehensive IoT platform for home automation including smart lighting, temperature control, and security systems. The system uses cloud connectivity for remote monitoring and control with machine learning for predictive automation.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        status: "In Progress",
        report: `
            <h3>Project Report: IoT Smart Home System</h3>
            <p><strong>Objective:</strong> Create an integrated smart home ecosystem with centralized control and machine learning capabilities.</p>
            <h4>Features:</h4>
            <ul>
                <li>Smart Lighting: Color and brightness control</li>
                <li>Climate Control: Temperature and humidity monitoring</li>
                <li>Security: Motion detection and door locks</li>
                <li>Energy Monitoring: Real-time power consumption tracking</li>
            </ul>
            <h4>Architecture:</h4>
            <p>Cloud-based system with MQTT protocol for device communication. Mobile app for remote access. AI module for predictive automation.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
        team: ["Fatima Mohamed", "Omar Khalil"],
        technologies: ["IoT", "MQTT", "Node.js", "Flutter", "AWS"]
    },
    {
        id: 3,
        name: "Drone Control System",
        description: "Advanced flight control system for autonomous drones",
        fullDescription: "Developing a sophisticated drone control system with autonomous flight capabilities, real-time video streaming, and advanced stabilization algorithms. The system features AI-powered target tracking and obstacle avoidance.",
        image: "https://images.unsplash.com/photo-1508444845599-5c89863b1713?w=600&h=400&fit=crop",
        status: "Completed",
        report: `
            <h3>Project Report: Drone Control System</h3>
            <p><strong>Objective:</strong> Develop an advanced autonomous drone with sophisticated control algorithms and real-time processing.</p>
            <h4>Key Components:</h4>
            <ul>
                <li>Flight Controller: Custom PID-based stabilization</li>
                <li>Vision System: 4K camera with real-time processing</li>
                <li>Communication: 2.4GHz RC link + 4G telemetry</li>
                <li>Autonomy: Waypoint navigation and target tracking</li>
            </ul>
            <h4>Results:</h4>
            <p>Successfully completed all flight tests. Maximum flight time: 45 minutes. Range: 10km. Currently deployed for inspection missions.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        team: ["Ahmed Hassan", "Layla Ibrahim"],
        technologies: ["PX4", "ArduPilot", "ROS", "Computer Vision"]
    },
    {
        id: 4,
        name: "Robotics Vision System",
        description: "Computer vision for automated inspection",
        fullDescription: "Creating an advanced vision system for quality control and automated inspection in manufacturing environments using deep learning models.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=400&fit=crop",
        status: "In Progress",
        report: `
            <h3>Project Report: Robotics Vision System</h3>
            <p><strong>Objective:</strong> Develop an intelligent vision system for automated defect detection and quality assurance.</p>
            <h4>System Overview:</h4>
            <ul>
                <li>Multi-camera setup for 360° inspection</li>
                <li>Deep learning model: YOLOv8 for real-time detection</li>
                <li>Processing speed: 30 FPS at 1080p resolution</li>
                <li>Accuracy rate: 98.5% defect detection</li>
            </ul>
            <h4>Application:</h4>
            <p>Currently deployed in manufacturing line for component inspection. Reduces inspection time by 70%.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
        team: ["Noor Sayed", "Mohammed Ali"],
        technologies: ["TensorFlow", "OpenCV", "Python", "YOLOv8"]
    },
    {
        id: 5,
        name: "Embedded AI Platform",
        description: "Edge computing for real-time AI processing",
        fullDescription: "Building an embedded AI platform that can run machine learning models directly on edge devices with minimal latency for real-time decision making.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
        status: "Completed",
        report: `
            <h3>Project Report: Embedded AI Platform</h3>
            <p><strong>Objective:</strong> Create a lightweight AI framework optimized for embedded systems and edge devices.</p>
            <h4>Platform Specifications:</h4>
            <ul>
                <li>Target Hardware: ARM-based devices (Raspberry Pi, Jetson Nano)</li>
                <li>Model Size: Up to 50MB for deployment</li>
                <li>Inference Time: <100ms per prediction</li>
                <li>Energy Efficient: <5W average power consumption</li>
            </ul>
            <h4>Achievements:</h4>
            <p>Successfully deployed on 500+ devices. Average inference time: 85ms. Power consumption: 3.2W. Framework released as open-source.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/5VcSwejf7Z0",
        team: ["Noor Sayed", "Hassan Rasheed"],
        technologies: ["TensorFlow Lite", "ONNX", "C++", "Python"]
    }
];

// ===== بيانات الفريق =====
const team = [
    {
        name: "Abdallah Omar",
        role: "Team Leader",
        field: "Project Development & Hardware Systems",
        bio: "Expert in project development and IoT systems integration, leading hardware execution with mature judgment and confident decision-making",
        image: "Abdallah Omar.png",
        whatsapp: "201091500201",
        linkedin: "https://www.linkedin.com/in/abdallah-omar-538169328/"
    },
    {
        name: "Fatima Mohamed",
        role: "Hardware Engineer",
        field: "PCB Design & Electrical Systems",
        bio: "Specialized in circuit design and power electronics.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
        whatsapp: "20129876543",
        linkedin: "https://linkedin.com/in/fatima-mohamed"
    },
    {
        name: "Omar Khalil",
        role: "Software Engineer",
        field: "Embedded Systems & AI",
        bio: "Passionate about machine learning and autonomous systems.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
        whatsapp: "20101234567",
        linkedin: "https://linkedin.com/in/omar-khalil"
    },
    {
        name: "Layla Ibrahim",
        role: "Mechanical Engineer",
        field: "Mechanical Design & 3D Modeling",
        bio: "Expert in CAD design and structural optimization.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Layla",
        whatsapp: "20112233445",
        linkedin: "https://linkedin.com/in/layla-ibrahim"
    },
    {
        name: "Mohammed Ali",
        role: "Firmware Developer",
        field: "Microcontroller Programming",
        bio: "Specialized in embedded C and real-time systems.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
        whatsapp: "20155667788",
        linkedin: "https://linkedin.com/in/mohammed-ali"
    },
    {
        name: "Noor Sayed",
        role: "Data Scientist",
        field: "Machine Learning & AI",
        bio: "Focused on AI and predictive analytics for robotics.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noor",
        whatsapp: "20188990011",
        linkedin: "https://linkedin.com/in/noor-sayed"
    },
    {
        name: "Zainab Hassan",
        role: "Quality Assurance",
        field: "Testing & Documentation",
        bio: "Ensures quality and proper documentation of projects.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab",
        whatsapp: "20199887766",
        linkedin: "https://linkedin.com/in/zainab-hassan"
    },
    {
        name: "Hassan Rasheed",
        role: "System Integration",
        field: "System Architecture & Integration",
        bio: "Expert in integrating complex systems.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
        whatsapp: "20133221155",
        linkedin: "https://linkedin.com/in/hassan-rasheed"
    },
    {
        name: "Amina Abdel",
        role: "Project Manager",
        field: "Project Management & Coordination",
        bio: "Manages projects and coordinates team efforts.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
        whatsapp: "20155443322",
        linkedin: "https://linkedin.com/in/amina-abdel"
    },
    {
        name: "Karim Samir",
        role: "Communication Engineer",
        field: "Wireless Systems & IoT",
        bio: "Specialized in wireless communication protocols.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
        whatsapp: "20177665544",
        linkedin: "https://linkedin.com/in/karim-samir"
    }
];

// ===== الخلفية المتحركة =====
function drawPCBBackground() {
    const canvas = document.getElementById('pcbCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const signals = [];
    
    for (let i = 0; i < 20; i++) {
        signals.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 50 + 20,
            speed: Math.random() * 2 + 1,
            direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#00ffff33';
        ctx.lineWidth = 2;

        const gridSize = 100;
        for (let x = 0; x < canvas.width; x += gridSize) {
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + gridSize, y);
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + gridSize);
                ctx.stroke();
                ctx.fillStyle = '#00ffff66';
                ctx.fillRect(x - 2, y - 2, 4, 4);
            }
        }

        signals.forEach(signal => {
            ctx.fillStyle = '#00ffff';
            if (signal.direction === 'horizontal') {
                ctx.fillRect(signal.x, signal.y, signal.length, 3);
                signal.x += signal.speed;
                if (signal.x > canvas.width) signal.x = -signal.length;
            } else {
                ctx.fillRect(signal.x, signal.y, 3, signal.length);
                signal.y += signal.speed;
                if (signal.y > canvas.height) signal.y = -signal.length;
            }
        });

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== تحميل المواد =====
function loadSubjects() {
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.onclick = () => showSubjectDetail(subject);
        
        card.innerHTML = `
            <span class="subject-icon">${subject.icon}</span>
            <h3 class="subject-title">${subject.name}</h3>
            <p class="subject-description">${subject.description}</p>
            <p class="task-count">${subject.tasks.length} Tasks</p>
        `;
        
        grid.appendChild(card);
    });
}

// ===== عرض تفاصيل المادة =====
function showSubjectDetail(subject) {
    const grid = document.getElementById('subjectsGrid');
    const detail = document.getElementById('subject-detail');
    const header = document.getElementById('subjectHeader');
    const tasksGrid = document.getElementById('tasksGrid');

    grid.style.display = 'none';
    detail.classList.remove('hidden');

    header.innerHTML = `
        <span class="subject-header-icon">${subject.icon}</span>
        <h2 class="subject-header-title">${subject.name}</h2>
        <p>${subject.description}</p>
    `;

    tasksGrid.innerHTML = '';
    subject.tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        
        // هنا الزرار اتغير وبقى ينده على دالة الفحص
        card.innerHTML = `
            <div class="task-number">${task.id}</div>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-description">${task.description}</p>
            <div class="task-buttons">
                <button onclick="checkTaskAvailability('${task.driveLink}', '${task.releaseDate}')" class="btn btn-drive">📁 Open Files</button>
                <a href="${task.formLink}" target="_blank" class="btn btn-submit">✅ Submit</a>
            </div>
        `;
        
        tasksGrid.appendChild(card);
    });
}
// ===== العودة للمواد =====
function goBackToSubjects() {
    const grid = document.getElementById('subjectsGrid');
    const detail = document.getElementById('subject-detail');
    
    grid.style.display = 'grid';
    detail.classList.add('hidden');
}

// ===== تحميل المشاريع =====
function loadProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => showProjectDetail(project);
        card.style.cursor = 'pointer';
        
        const statusClass = project.status === 'Completed' ? 'status-completed' : 'status-inprogress';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-content">
                <span class="project-status ${statusClass}">${project.status}</span>
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <p class="project-clickhint">👆 Click to view details</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ===== عرض تفاصيل المشروع =====
function showProjectDetail(project) {
    const container = document.getElementById('projectsContainer');
    const detail = document.getElementById('project-detail');
    
    container.style.display = 'none';
    detail.classList.remove('hidden');
    
    detail.innerHTML = `
        <button class="back-btn" onclick="goBackToProjects()">← Back to Projects</button>
        
        <div class="project-detail-header">
            <img src="${project.image}" alt="${project.name}" class="project-detail-image">
            <div class="project-detail-info">
                <h1 class="project-detail-title">${project.name}</h1>
                <span class="project-status ${project.status === 'Completed' ? 'status-completed' : 'status-inprogress'}">
                    ${project.status}
                </span>
                <p class="project-detail-description">${project.fullDescription}</p>
            </div>
        </div>

        <div class="project-details-grid">
            <div class="project-details-box">
                <h3>📋 Project Report</h3>
                <div class="report-content">
                    ${project.report}
                </div>
            </div>

            <div class="project-details-box">
                <h3>👥 Team Members</h3>
                <ul class="team-members-list">
                    ${project.team.map(member => `<li>✓ ${member}</li>`).join('')}
                </ul>
            </div>

            <div class="project-details-box">
                <h3>🛠️ Technologies Used</h3>
                <div class="technologies-list">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="project-video-section">
            <h3>🎬 Project Demo Video</h3>
            <div class="video-container">
                <iframe src="${project.videoUrl}" title="Project Demo" allowfullscreen></iframe>
            </div>
            <p class="video-note">👆 Replace the video URL with your project demo link</p>
        </div>
    `;
}

// ===== العودة للمشاريع =====
function goBackToProjects() {
    const container = document.getElementById('projectsContainer');
    const detail = document.getElementById('project-detail');
    
    container.style.display = 'grid';
    detail.classList.add('hidden');
    detail.innerHTML = '';
}

// ===== تحميل الفريق =====
function loadTeam() {
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = '';
    
    team.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-member';
        
        const whatsappLink = `https://wa.me/${member.whatsapp}?text=Hello`;
        
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="team-image">
            <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-field">${member.field}</p>
                <p class="team-bio">${member.bio}</p>
                <div class="team-contact">
                    <a href="${member.linkedin}" target="_blank" class="contact-btn" title="LinkedIn">in</a>
                    <a href="${whatsappLink}" target="_blank" class="contact-btn" title="WhatsApp">W</a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ===== التنقل بين الصفحات =====
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // إزالة active من جميع العناصر
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        
        // عرض الصفحة المختارة
        const page = item.getAttribute('data-page');
        const pageElement = document.getElementById(`${page}-page`);
        
        if (pageElement) {
            pageElement.classList.add('active');
        }
    });
});

// ===== التهيئة =====
window.addEventListener('load', () => {
    drawPCBBackground();
    loadSubjects();
    loadProjects();
    loadTeam();
    
    // جعل الشعار يعود للبيت
    document.querySelector('.logo-section').addEventListener('click', () => {
        document.querySelector('[data-page="home"]').click();
    });
});
// ===== دالة التحقق من موعد التاسك =====
function checkTaskAvailability(driveLink, dateStr) {
    const now = new Date(); // الوقت الحالي
    const releaseDate = new Date(dateStr); // وقت فتح التاسك

    if (now >= releaseDate) {
        // لو الوقت الحالي عدى وقت الفتح، افتح اللينك
        window.open(driveLink, '_blank');
    } else {
        // لو لسه، طلع رسالة
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric' 
        };
        const dateFormatted = releaseDate.toLocaleDateString('ar-EG', options);
        
        alert(`🚫 عذراً، هذا التاسك مغلق حالياً!\n\n📅 سيتم فتح التاسك يوم:\n${dateFormatted}\n\nيرجى الالتزام بالجدول الزمني.\n\nمع تحياتي، \nأخوكم" Fares Soliman "😉`);
    }
}