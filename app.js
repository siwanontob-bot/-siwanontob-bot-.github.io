// ข้อมูลเริ่มต้นสำหรับระบบบันทึกงาน (Kanban Board)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [
    {
        id: '1',
        title: 'แยกย่อยปัญหา (Decomposition)',
        desc: 'แบ่งขั้นตอนการทอดไข่เจียวออกเป็นขั้นตอนเล็กๆ เช่น เตรียมอุปกรณ์ ตีไข่ ตั้งกระทะ ทอด และเสิร์ฟ',
        status: 'todo',
        priority: 'medium'
    },
    {
        id: '2',
        title: 'ค้นหารูปแบบ (Pattern Recognition)',
        desc: 'วิเคราะห์ว่าการถอดรหัสของรหัสผ่านส่วนใหญ่ มักจะขึ้นต้นด้วยตัวอักษรพิมพ์ใหญ่ตัวแรกเสมอ',
        status: 'in-progress',
        priority: 'low'
    },
    {
        id: '3',
        title: 'เขียนโปรแกรมด้วย Scratch',
        desc: 'ออกแบบโค้ดจำลองการเดินตามเส้นของรถยนต์อัจฉริยะ',
        status: 'done',
        priority: 'high'
    }
];

// ข้อมูลของตัวอย่างจำลองสแต็กและคิว (Stack & Queue)
let stackData = ['วิชาวิทยาการคำนวณ', 'วิชาภาษาไทย', 'วิชาศิลปะ'];
let queueData = ['คิวที่ 1', 'คิวที่ 2', 'คิวที่ 3'];

// ข้อมูลข้อสอบตามทฤษฎีบลูม (Bloom's Taxonomy)
const quizData = [
    {
        level: "ระดับที่ 1: การจำ (Remember)",
        question: "ข้อใดคือความหมายที่ถูกต้องของ 'การแบ่งย่อยปัญหา' (Decomposition)?",
        options: [
            "A. การนำปัญหามาคิดเป็นภาพวาดและระบายสี",
            "B. การแตกปัญหาใหญ่ออกเป็นปัญหาย่อยๆ เพื่อแก้ไขทีละส่วน",
            "C. การข้ามส่วนที่ซับซ้อนไปทำส่วนที่ง่ายก่อน"
        ],
        answer: 1,
        explanation: "การแบ่งย่อยปัญหาคือการแยกแยะปัญหาย่อยๆ ออกมาจากปัญหาใหญ่เพื่อให้สามารถจัดระเบียบและจัดการได้ง่ายขึ้น"
    },
    {
        level: "ระดับที่ 2: ความเข้าใจ (Understand)",
        question: "ในการ 'จดจำรูปแบบ' (Pattern Recognition) เราควรทำสิ่งใดเป็นอันดับแรก?",
        options: [
            "A. ค้นหาความเหมือนหรือแนวโน้มของข้อมูลเพื่อลดทอนส่วนที่แตกต่าง",
            "B. สร้างขั้นตอนการประมวลผลทันทีโดยไม่ต้องดูข้อมูล",
            "C. ตั้งชื่อตัวแปรและข้อมูลเพื่อใช้ในระบบคอมพิวเตอร์"
        ],
        answer: 0,
        explanation: "การวิเคราะห์หาข้อมูลรูปแบบ พฤติกรรม หรือแนวโน้มความเหมือนช่วยให้สร้างรูปแบบแก้ปัญหาระยะยาวได้ดีขึ้น"
    },
    {
        level: "ระดับที่ 3: การประยุกต์ใช้ (Apply)",
        question: "หากใช้วิธีนำแผ่นซีดีใส่กล่องทรงกระบอกใสทีละแผ่น เมื่อต้องการใช้แผ่นซีดี แผ่นแรกที่หยิบออกมาได้จะต้องเป็นแผ่นที่ใส่อยู่ด้านบนสุด นี่คือโครงสร้างแบบใด?",
        options: [
            "A. แบบต่อคิว (Queue)",
            "B. แบบแถวลำดับ (Array)",
            "C. แบบกองซ้อน (Stack)"
        ],
        answer: 2,
        explanation: "โครงสร้างข้อมูลแบบ Stack คือการทำตามลำดับ LIFO (Last In, First Out) ตัวที่ใส่ไปคนสุดท้ายจะถูกเอาออกมาใช้ก่อน"
    },
    {
        level: "ระดับที่ 4: การวิเคราะห์ (Analyze)",
        question: "หากโทรศัพท์ของคุณไม่สามารถเชื่อมอินเทอร์เน็ตได้ การคิดเชิงคำนวณในส่วนของ 'การจำแนกรูปแบบปัญหา' (Pattern Recognition) จะต้องใช้สิ่งใดช่วยตรวจสอบ?",
        options: [
            "A. ตรวจสอบว่าโทรศัพท์เครื่องอื่นต่อ Wi-Fi ในบ้านเดียวกันได้ตามปกติหรือไม่",
            "B. ซื้อโทรศัพท์ใหม่ทันที",
            "C. ตั้งค่าเครื่องใหม่ทั้งหมดเพื่อแก้ความสับสน"
        ],
        answer: 0,
        explanation: "การตรวจสอบว่าเกิดกับเครื่องอื่นในแบบเดียวกันหรือไม่ ช่วยให้เราระบุได้ว่าปัญหามาจากจุดเชื่อมต่อ (Router/Internet) หรือตัวเครื่องของเราเอง"
    },
    {
        level: "ระดับที่ 5: การประเมินค่า (Evaluate)",
        question: "ระบบใดต่อไปนี้ มีความจำเป็นที่จะต้องใช้การทำงานโครงสร้างข้อมูลแบบ คิว (Queue) มากที่สุด?",
        options: [
            "A. ระบบการพิมพ์ข้อมูลลงเครื่องปริ้นเอกสารตามลำดับส่งงานก่อนหลัง",
            "B. ระบบประวัติการกดปุ่ม ย้อนกลับ (Undo/Back) บนแอปพลิเคชัน",
            "C. ระบบจัดเก็บรายชื่อสมุดโทรศัพท์ส่วนตัวที่ค้นหาตามลำดับตัวอักษร"
        ],
        answer: 0,
        explanation: "คิวจัดสรรข้อมูลแบบมีมาก่อนทำก่อน (FIFO) เพื่อสร้างระเบียบในการเข้าใช้ทรัพยากรร่วม เช่น เครื่องปริ้นเตอร์"
    },
    {
        level: "ระดับที่ 6: การสร้างสรรค์ (Create)",
        question: "ในการเขียนโปรแกรมวาดรูป 'วงกลม' ซ้ำๆ 10 วงในจุดต่างๆ ของโปรแกรมบล็อกคำสั่ง วิธีใดที่ออกแบบโครงสร้างขั้นตอนการเขียนโค้ดได้มีประสิทธิภาพดีที่สุด?",
        options: [
            "A. คัดลอกบล็อกคำสั่งในการวาดวงกลม 10 รอบต่อกันลงมาเรื่อยๆ",
            "B. สร้างฟังก์ชันการวาดวงกลมแยกไว้ แล้วเรียกใช้ภายในบล็อก 'ทำซ้ำ 10 ครั้ง'",
            "C. วาดภาพทีละวงด้วยเครื่องมือกราฟิกโดยไม่ต้องใช้ชุดคำสั่งควบคุม"
        ],
        answer: 1,
        explanation: "การสร้างฟังก์ชัน (การคิดเชิงนามธรรม) ร่วมกับการทำซ้ำ (อัลกอริทึมที่ดี) ช่วยให้โค้ดมีความคล่องตัวและจัดการแก้ไขในภายหลังได้ง่ายที่สุด"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// อ้างอิง DOM Elements
const columns = {
    'todo': document.getElementById('todo'),
    'in-progress': document.getElementById('in-progress'),
    'done': document.getElementById('done')
};

const counts = {
    'todo': document.getElementById('todo-count'),
    'in-progress': document.getElementById('in-progress-count'),
    'done': document.getElementById('done-count')
};

// ฟังก์ชันเริ่มต้นระบบ
function initApp() {
    renderTasks();
    updateStackUI();
    updateQueueUI();
    loadQuestion();
    
    // ตั้งเวลาปัจจุบันบนใบประกาศนียบัตร
    const today = new Date();
    const dateStr = today.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('cert-date').innerText = dateStr;
}

// เรนเดอร์การ์ดงาน
function renderTasks() {
    Object.values(columns).forEach(col => col.innerHTML = '');
    const totalCount = { 'todo': 0, 'in-progress': 0, 'done': 0 };

    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'bg-cardBg border border-slate-800 p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-slate-700 transition shadow-md relative group';
        card.draggable = true;
        card.id = `task-${task.id}`;
        card.dataset.id = task.id;

        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);

        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="text-[10px] px-2 py-0.5 rounded-full border ${priorityColors[task.priority]}">
                    ${priorityLabel[task.priority]}
                </span>
                <button onclick="deleteTask('${task.id}')" class="text-slate-500 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition duration-150 absolute top-3.5 right-3.5">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            </div>
            <h3 class="font-medium text-white mb-1 pr-6 text-sm sm:text-base">${escapeHtml(task.title)}</h3>
            <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(task.desc)}</p>
        `;

        columns[task.status].appendChild(card);
        totalCount[task.status]++;
    });

    Object.keys(counts).forEach(status => {
        counts[status].textContent = totalCount[status];
    });

    saveToLocalStorage();
}

// ฟังชั่นสลับแท็บเมนู
function openTab(tabName) {
    const tabs = ['learn', 'board', 'quiz', 'certificate'];
    tabs.forEach(tab => {
        const element = document.getElementById(`page-${tab}`);
        const button = document.getElementById(`tab-${tab}`);
        if (tab === tabName) {
            element.classList.remove('hidden');
            if(button) {
                button.classList.add('text-white', 'bg-slate-800');
                button.classList.remove('text-slate-400');
            }
        } else {
            element.classList.add('hidden');
            if(button) {
                button.classList.remove('text-white', 'bg-slate-800');
                button.classList.add('text-slate-400');
            }
        }
    });
}

// ฟังก์ชันเพิ่มการ์ดงาน
function openModal() {
    const modal = document.getElementById('addTaskModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        document.getElementById('addTaskModalContainer').classList.remove('scale-95');
        document.getElementById('addTaskModalContainer').classList.add('scale-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('addTaskModal');
    document.getElementById('addTaskModalContainer').classList.remove('scale-100');
    document.getElementById('addTaskModalContainer').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.getElementById('taskFormMain').reset();
    }, 150);
}

function addTask(e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const desc = document.getElementById('taskDesc').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    
    const newTask = {
        id: Date.now().toString(),
        title,
        desc,
        status: 'todo',
        priority
    };

    tasks.push(newTask);
    renderTasks();
    closeModal();
}

function deleteTask(id) {
    if(confirm('ต้องการลบงานนี้ใช่หรือไม่?')) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
}

// Drag & Drop
let draggedItem = null;

function dragStart(e) {
    draggedItem = this;
    setTimeout(() => this.classList.add('dragging'), 0);
    e.dataTransfer.setData('text/plain', this.dataset.id);
}

function dragEnd() {
    this.classList.remove('dragging');
    draggedItem = null;
}

function allowDrop(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    const targetColumn = e.currentTarget;
    targetColumn.classList.remove('drag-over');
    
    const taskId = e.dataTransfer.getData('text/plain');
    const targetStatus = targetColumn.id;

    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.status = targetStatus;
        }
        return task;
    });

    renderTasks();
}

// Stack Operations
function pushToStack() {
    const val = document.getElementById('stackInput').value.trim();
    if(val !== '') {
        stackData.push(val);
        document.getElementById('stackInput').value = '';
        updateStackUI();
    }
}

function popFromStack() {
    if(stackData.length > 0) {
        stackData.pop();
        updateStackUI();
    } else {
        alert('สแต็กว่างเปล่า (Stack Underflow)');
    }
}

function updateStackUI() {
    const container = document.getElementById('stackContainer');
    if (stackData.length === 0) {
        container.innerHTML = '<span class="text-slate-500 text-sm italic my-auto">สแต็กว่างเปล่า (Stack is empty)</span>';
        return;
    }
    container.innerHTML = '';
    stackData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'w-full max-w-[250px] p-3 text-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold text-xs sm:text-sm animate-pulse';
        div.innerText = `${index + 1}. ${item}`;
        container.appendChild(div);
    });
}

// Queue Operations
function enqueue() {
    const val = document.getElementById('queueInput').value.trim();
    if(val !== '') {
        queueData.push(val);
        document.getElementById('queueInput').value = '';
        updateQueueUI();
    }
}

// Dequeue
function dequeue() {
    if(queueData.length > 0) {
        queueData.shift();
        updateQueueUI();
    } else {
        alert('คิวว่างเปล่า (Queue Underflow)');
    }
}

function updateQueueUI() {
    const container = document.getElementById('queueContainer');
    if (queueData.length === 0) {
        container.innerHTML = '<span class="text-slate-500 text-sm italic mx-auto">คิวว่างเปล่า (Queue is empty)</span>';
        return;
    }
    container.innerHTML = '';
    queueData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'flex-shrink-0 w-28 h-28 flex items-center justify-center p-3 text-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 font-semibold text-xs';
        div.innerText = `${index + 1}. ${item}`;
        container.appendChild(div);
    });
}

// Quiz Core
function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    
    if (currentQuestionIndex >= quizData.length) {
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        document.getElementById('final-score').innerText = `คุณทำคะแนนได้ทั้งหมด ${score} จาก ${quizData.length} คะแนน`;
        document.getElementById('score-tracker').innerText = `สิ้นสุดการทดสอบ`;
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    
    document.getElementById('quiz-step').innerText = currentQuestion.level;
    document.getElementById('score-tracker').innerText = `คะแนน: ${score} / ${quizData.length}`;
    
    const percent = ((currentQuestionIndex + 1) / quizData.length) * 100;
    document.getElementById('quiz-progress').style.width = `${percent}%`;

    document.getElementById('quiz-question').innerText = currentQuestion.question;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left p-4 rounded-xl border border-slate-800 hover:border-purple-500 hover:bg-purple-900/10 transition duration-150';
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
        alert('คำตอบถูกต้อง! \nคำอธิบาย: ' + currentQuestion.explanation);
    } else {
        alert('คำตอบผิดพลาด! \nคำตอบที่ถูกคือ: ' + currentQuestion.options[currentQuestion.answer] + '\nคำอธิบาย: ' + currentQuestion.explanation);
    }
    currentQuestionIndex++;
    loadQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    loadQuestion();
}

function showCertificate() {
    openTab('certificate');
    drawCanvasCert();
}

function drawCanvasCert() {
    const canvas = document.getElementById('certCanvas');
    const ctx = canvas.getContext('2d');
    const name = document.getElementById('cert-name').value || 'น้องผู้ตั้งใจเรียน';

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 800, 600);

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 15;
    ctx.strokeRect(20, 20, 760, 560);
    
    ctx.strokeStyle = '#fef3c7';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 740, 540);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF COMPLETION', 400, 120);

    ctx.font = 'italic 18px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('เกียบรติบัตรฉบับนี้มอบให้เพื่อแสดงว่า', 400, 190);

    ctx.font = 'bold 32px sans-serif';
    ctx.fillStyle = '#7c3aed';
    ctx.fillText(name, 400, 275);

    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(600, 300);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('ได้ผ่านการทำบทเรียนและพิชิตคำถามของหลักสูตรอย่างสำเร็จลุล่วง', 400, 350);
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('“วิชาวิทยาการคำนวณ ชั้นประถมศึกษาปีที่ 6”', 400, 395);

    const today = new Date();
    const dateStr = today.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'left';
    ctx.fillText('วันที่: ' + dateStr, 60, 500);

    ctx.textAlign = 'right';
    ctx.font = 'italic bold 22px sans-serif';
    ctx.fillStyle = '#b45309';
    ctx.fillText('EduCoding Academy', 740, 480);
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('ผู้ตรวจและอนุมัติหลักสูตร', 740, 505);
}

function downloadCert() {
    const canvas = document.getElementById('certCanvas');
    const link = document.createElement('a');
    link.download = 'computational-thinking-certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

window.onload = initApp;
