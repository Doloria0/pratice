// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: true,
        easing: 'ease-in-out',
        offset: 100
    });

    // Navigation Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.classList.remove('active');
            if (navLinksContainer) navLinksContainer.classList.remove('active');
        });
    });

    // Initialize first section if no hash
    if (!window.location.hash) {
        const firstSection = document.querySelector('.section');
        if (firstSection) firstSection.classList.add('active');
    }
});

// Modal Logic
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

const expertiseDetails = {
    logic: {
        title: "디지털 논리설계 상세 역량",
        content: `
            <div class="modal-detail">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Logic Circuit Analysis" class="modal-img">
                <p class="img-hint">※ 실제 설계한 Logic Simulator 화면으로 대체 권장 (예: logic_snapshot.jpg)</p>
                <h3>상세 기술 역량</h3>
                <ul>
                    <li><strong>조합 논리 및 순차 논리 설계:</strong> Mux, Demux, Encoder/Decoder부터 Flip-Flop, Counter, Register에 이르기까지 반도체 장비 제어의 기초가 되는 핵심 회로 설계 능력 보유.</li>
                    <li><strong>유한 상태 머신(FSM) 최적화:</strong> Mealy/Moore 머신 설계를 통한 복잡한 제어 시나리오의 논리적 최적화 및 상태 전이도 설계.</li>
                    <li><strong>타이밍 분석 및 신호 무결성:</strong> Setup/Hold Time 분석을 통한 클럭 오차 및 전파 지연 개선으로 초고속 데이터 전송 안정성 확보.</li>
                    <li><strong>Simulations:</strong> 실제 카운터 회로와 상태 레지스터의 동작을 시뮬레이션하여 데이터 버스의 흐름을 제어하고 에러를 검출하는 로직 구현.</li>
                </ul>
            </div>
        `
    },
    circuit: {
        title: "전기/전자 회로 분석 상세 역량",
        content: `
            <div class="modal-detail">
                <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800" alt="Circuit Analysis Study" class="modal-img">
                <p class="img-hint">※ 실습 시 측정한 오실로스코프 파형 사진으로 대체 권장 (예: circuit_analysis.jpg)</p>
                <h3>실무 분석 역량</h3>
                <ul>
                    <li><strong>능동 소자 특성 분석:</strong> Diode, BJT, FET(Mosfet) 소자의 동작 영역(Active, Saturation, Cut-off) 분석을 통한 전원 스위칭 모듈 유지보수.</li>
                    <li><strong>고속 신호 고장 진단:</strong> 오실로스코프를 활용한 데이터 라인의 노이즈 및 왜곡 파형 분석으로 고장 원인(전압 강하, 임피던스 불일치 등) 규명.</li>
                    <li><strong>전력 반도체 제어:</strong> 전압 제어 및 전류 제한 회로 분석을 통해 설비의 과부하를 방지하고 최적의 전력 효율을 유지하는 정밀 진단 역량.</li>
                    <li><strong>정밀 측정 장비 운용:</strong> LCR 미터, 스펙트럼 분석기 등 정밀 계측기를 통한 소자 레벨의 무결성 검증 및 교정 실무.</li>
                </ul>
            </div>
        `
    },
    control: {
        title: "제어 시스템 프로그래밍 상세 역량",
        content: `
            <div class="modal-detail">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Control System Programming" class="modal-img">
                <p class="img-hint">※ 실제 작성한 Python 또는 Ladder Diagram 코드 캡처본으로 대체 권장 (예: control_code.jpg)</p>
                <h3>프로그래밍 및 자동화 역량</h3>
                <ul>
                    <li><strong>PLC 기반 자동화 설계:</strong> Mitsubishi/LS 전기 PLC의 래더 다이어그램을 활용하여 반도체 설비의 공정 시퀀스를 설계하고 인터록(Interlock) 회로를 통해 안전성 확보.</li>
                    <li><strong>Python 기반 데이터 제어:</strong> 센서 데이터를 실시간으로 파이썬으로 가공하여 설비 상태를 시연하고, 비정상 진동이나 온도 상승을 감지하는 머신러닝 기반 예지 보전 알고리즘 구현 기초.</li>
                    <li><strong>임베디드 제어(MCU/ROS):</strong> ARM 기반 MCU 및 ROS를 이용한 로봇 팔 및 가동체 제어로 복합적인 기구부의 좌표 제어 및 동기화 기술 보유.</li>
                    <li><strong>통신 인터페이스 연동:</strong> RS-232, TCP/IP, Modbus 통신을 이용한 장비 간 데이터 연동 및 HMI 모니터링 시스템 구축 실무.</li>
                </ul>
            </div>
        `
    },
    maintenance: {
        title: "반도체 공정 및 유지보수 상세 역량",
        content: `
            <div class="modal-detail">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Semiconductor Maintenance" class="modal-img">
                <p class="img-hint">※ 방진복 착용 사진 또는 공정 실습 보고서 표지로 대체 권장</p>
                <h3>공정 및 설비 실무</h3>
                <ul>
                    <li><strong>반도체 8대 공정 프로세스:</strong> 웨이퍼 제조부터 패키징까지 각 공정의 화학적/물리적 이해를 바탕으로 한 전공정/후공정 설비 메커니즘 숙지.</li>
                    <li><strong>설비 유지보수(PM/BM):</strong> 공압 실린더 제어, 진공 펌프 라인 점검 및 전장 배선 트러블슈팅을 통한 설비 가동률 극대화 실습 수행.</li>
                    <li><strong>PLC-HMI 통합 제어:</strong> 설비의 상태를 실시간으로 모니터링하고 가동 파라미터를 조정하는 인터페이스 설계 및 운용 능력.</li>
                    <li><strong>안전 및 환경(EHS):</strong> 반도체 클린룸 수칙 준수 및 위험물 취급 안전 교육 이수를 통한 현장 적응력 확보.</li>
                </ul>
            </div>
        `
    },
    project1: {
        title: "Phase 01: SolidWorks 3D 기구 설계 상세 분석",
        content: `
            <div class="modal-detail">
                <!-- Compact Image Row -->
                <div class="modal-image-row" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 25px;">
                    <div class="thumb-container">
                        <img src="1.png" alt="Front View" class="modal-img-small">
                        <span class="thumb-label">정면도</span>
                    </div>
                    <div class="thumb-container">
                        <img src="3.png" alt="Top View" class="modal-img-small">
                        <span class="thumb-label">평면도</span>
                    </div>
                    <div class="thumb-container">
                        <img src="2.png" alt="Side View" class="modal-img-small">
                        <span class="thumb-label">측면도</span>
                    </div>
                </div>

                <div class="technical-specs" style="background: #f8fafc; padding: 20px; border-radius: 15px; border-left: 5px solid #034EA2;">
                    <h3 style="margin-bottom: 15px; color: #034EA2;"><i class="fa-solid fa-microchip"></i> 설계 엔지니어링 리포트</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: #334155;">[기구학적 설계 역량]</h4>
                            <ul style="font-size: 0.85rem; color: #64748b; line-height: 1.6;">
                                <li><strong>관절 링크 최적화:</strong> 8족 보행의 자유도(DoF)를 고려한 링크 길이 산출</li>
                                <li><strong>Inverse Kinematics:</strong> 목표 지점 도달을 위한 수치 해석 기반 설계</li>
                                <li><strong>공차 설계:</strong> 가공 및 조립을 고려한 ±0.05mm 정밀 공차 적용</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: #334155;">[구조 해석 및 시뮬레이션]</h4>
                            <ul style="font-size: 0.85rem; color: #64748b; line-height: 1.6;">
                                <li><strong>하중 분산 해석:</strong> 본체 무게(약 2.5kg) 대비 관절 부하 시뮬레이션</li>
                                <li><strong>재질 선정:</strong> 강성 및 경량화를 고려한 프레임 소재 데이터 적용</li>
                                <li><strong>간섭 체크:</strong> 가동 범위 내 부품 간 충돌 방지 알고리즘 검증</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: #334155;">[핵심 성과 요약]</h4>
                    <p style="font-size: 0.88rem; color: #475569; line-height: 1.6; background: #fff; padding: 15px; border-radius: 10px; border: 1px dashed #cbd5e1;">
                        본 설계는 SolidWorks를 활용한 **Engineering Full-Cycle** 경험의 시작으로, 단순한 외형 설계를 넘어 
                        실제 구동 시 발생하는 물리적 변수들을 설계 단계에서 선제적으로 대응하는 **소프트웨어-하드웨어 통합 설계 역량**을 증명합니다.
                    </p>
                </div>
            </div>
        `
    },
    project2: {
        title: "Phase 02: 기구 가공 및 정밀 조립",
        content: `
            <div class="modal-detail">
                <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" alt="Robot Assembly" class="modal-img">
                <h3>제작 공정 상세</h3>
                <ul>
                    <li><strong>정밀 가공:</strong> 3D 프린팅 및 CNC 가공을 통한 고강도 경량 프레임 제작.</li>
                    <li><strong>구동부 조립:</strong> 서보 모터와 기어박스의 정밀 정렬을 통한 마찰 손실 최소화.</li>
                    <li><strong>배선 구조화:</strong> 복잡한 센서 및 전원 배선을 슬리빙 처리하여 노이즈 방지 및 유지보수성 향상.</li>
                </ul>
            </div>
        `
    },
    project3: {
        title: "Phase 03: 실시간 제어 및 알고리즘",
        content: `
            <div class="modal-detail">
                <img src="control_algo.png" alt="Control Logic" class="modal-img">
                <h3>제어 기술 역량</h3>
                <ul>
                    <li><strong>Gait Algorithm:</strong> 안정적인 보행 패턴 생성을 위한 Inverse Kinematics(역기구학) 적용.</li>
                    <li><strong>PID 제어:</strong> 자이로 센서 데이터를 이용한 실시간 자세 제어 및 수평 유지.</li>
                    <li><strong>센서 퓨전:</strong> 초음파 및 IR 센서를 활용한 자율 장애물 회피 로직 구현.</li>
                </ul>
            </div>
        `
    },
    project4: {
        title: "Phase 04: 최적화 및 성능 평가",
        content: `
            <div class="modal-detail">
                <img src="optimization_dashboard.jpg" alt="Optimization Dashboard" class="modal-img">
                <h3>최종 성과 지표</h3>
                <ul>
                    <li><strong>가동 효율성:</strong> 최적화 전 대비 배터리 소모율 15% 개선.</li>
                    <li><strong>주행 안정성:</strong> 비평탄 지형에서의 보행 성공률 95% 이상 달성.</li>
                    <li><strong>시스템 신뢰성:</strong> 10시간 연속 가동 테스트를 통한 하드웨어 내구성 검증 완료.</li>
                </ul>
            </div>
        `
    }
};

window.openModal = function(key) {
    const detail = expertiseDetails[key];
    if (!detail) return;
    
    modalBody.innerHTML = `
        <h2 style="color: #034EA2; margin-bottom: 25px; font-weight: 700;">${detail.title}</h2>
        ${detail.content}
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Screen Switching Logic
const navLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Handle special display for hero section
        if (targetSection.classList.contains('hero')) {
            targetSection.style.display = 'flex';
        } else {
            targetSection.style.display = 'block';
        }
    }

    // Update nav links active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Reset AOS for the newly shown section
    AOS.refresh();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Add click events to nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
        closeMobileMenu();
    });
});

// Add click event to nav logo
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
    navLogo.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('synergy');
        closeMobileMenu();
    });
}

function closeMobileMenu() {
    const navLinksContainer = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

// Initial Visibility - Show SYNERGY (Hero) by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('synergy');
});

// Navbar Scroll Effect (Shadow & Height)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        navbar.style.height = '70px';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.height = '80px';
    }
});

// --- Bulletin Board Logic ---
const boardBody = document.getElementById('board-body');
const boardForm = document.getElementById('board-form');
const btnWrite = document.getElementById('btn-write');
const btnCancel = document.getElementById('btn-cancel');
const listView = document.getElementById('board-list-view');
const formView = document.getElementById('board-form-view');

let posts = JSON.parse(localStorage.getItem('portfolio_posts')) || [];

function savePosts() {
    localStorage.setItem('portfolio_posts', JSON.stringify(posts));
    renderPosts();
}

// Academic Roadmap Tab Logic
window.showYear = function(year) {
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.innerText === `${year}학년`) {
            tab.classList.add('active');
        }
    });

    // Update content visibility
    const contents = document.querySelectorAll('.year-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(`year${year}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // Refresh AOS for the new content
    AOS.refresh();
};

function renderPosts() {
    if (!boardBody) return;
    boardBody.innerHTML = '';
    if (posts.length === 0) {
        boardBody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 40px;">등록된 게시물이 없습니다. 첫 글을 남겨보세요!</td></tr>';
        return;
    }

    posts.forEach((post, index) => {
        const tr = document.createElement('tr');
        
        const titleTd = document.createElement('td');
        titleTd.style.padding = '20px 15px';
        titleTd.style.cursor = 'pointer';
        titleTd.innerHTML = `
            <div style="font-weight: 700; font-size: 1.1rem; color: #1a1a1a; margin-bottom: 8px;">
                ${post.title}
                ${post.adminReply ? '<span class="reply-badge">답변완료</span>' : ''}
            </div>
            <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 10px; line-height: 1.4;">
                ${post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}
            </div>
            ${post.adminReply ? `
                <div style="background: #f0f7ff; padding: 12px 15px; border-radius: 8px; border-left: 3px solid var(--accent-color); margin-top: 10px;">
                    <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-color); margin-bottom: 5px;">
                        <i class="fa-solid fa-reply"></i> 관리자 답변
                    </div>
                    <div style="font-size: 0.85rem; color: #1e293b;">
                        ${post.adminReply.length > 80 ? post.adminReply.substring(0, 80) + '...' : post.adminReply}
                    </div>
                </div>
            ` : ''}
        `;
        titleTd.addEventListener('click', () => viewPost(post.id));

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td></td> <!-- placeholder for titleTd -->
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td>
                <div class="board-actions">
                    <button class="action-btn reply-btn" data-id="${post.id}" title="답글"><i class="fa-solid fa-comment-dots"></i></button>
                    <button class="action-btn edit-btn" data-id="${post.id}" title="수정"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-btn delete-btn" data-id="${post.id}" title="삭제"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;

        // Replace placeholder with the actual TD that has listener
        const placeholderTd = tr.querySelector('td:nth-child(2)');
        tr.replaceChild(titleTd, placeholderTd);

        boardBody.appendChild(tr);
    });

    // Add listeners to buttons
    document.querySelectorAll('.reply-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            replyPost(btn.dataset.id);
        };
    });
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            editPost(btn.dataset.id);
        };
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            deletePost(btn.dataset.id);
        };
    });
}

if (btnWrite) {
    btnWrite.onclick = () => {
        boardForm.reset();
        document.getElementById('post-id').value = '';
        listView.style.display = 'none';
        formView.style.display = 'block';
    };
}

if (btnCancel) {
    btnCancel.onclick = () => {
        formView.style.display = 'none';
        listView.style.display = 'block';
    };
}

if (boardForm) {
    boardForm.onsubmit = (e) => {
        e.preventDefault();
        const id = document.getElementById('post-id').value;
        const title = document.getElementById('post-title').value;
        const author = document.getElementById('post-author').value;
        const password = document.getElementById('post-password').value;
        const content = document.getElementById('post-content').value;
        const date = new Date().toLocaleDateString();

        if (id) {
            const index = posts.findIndex(p => p.id == id);
            // Optional: You could allow updating the password here too
            posts[index] = { ...posts[index], title, author, password, content, date };
        } else {
            const newPost = {
                id: Date.now(),
                title,
                author,
                password,
                content,
                date
            };
            posts.push(newPost);
        }

        savePosts();
        btnCancel.onclick();
    };
}

window.viewPost = (id) => {
    const post = posts.find(p => p.id == id);
    if (!post) return;

    // Check if detail row already exists
    const existingDetail = document.getElementById(`detail-${id}`);
    if (existingDetail) {
        existingDetail.remove();
        return;
    }

    // Remove any other open details for a cleaner look (optional)
    document.querySelectorAll('.post-detail-row').forEach(row => row.remove());

    const tr = Array.from(boardBody.querySelectorAll('tr')).find(row => {
        const titleCell = row.querySelector('td:nth-child(2)');
        return titleCell && titleCell.innerText.includes(post.title);
    });

    if (tr) {
        const detailTr = document.createElement('tr');
        detailTr.id = `detail-${id}`;
        detailTr.className = 'post-detail-row';
        detailTr.innerHTML = `
            <td colspan="5">
                <div class="expand-content" data-aos="fade-down">
                    <div class="post-text">${post.content}</div>
                    ${post.adminReply ? `
                        <div class="admin-reply-box">
                            <div class="reply-header"><i class="fa-solid fa-reply"></i> 관리자 답변</div>
                            <div class="reply-text">${post.adminReply}</div>
                        </div>
                    ` : `
                        <div class="no-reply">아직 등록된 답변이 없습니다.</div>
                    `}
                </div>
            </td>
        `;
        tr.after(detailTr);
        AOS.refresh();
    }
};

window.editPost = (id) => {
    const post = posts.find(p => p.id == id);
    if (!post) return;

    const inputPass = prompt('비밀번호를 입력하세요:');
    if (inputPass === post.password) {
        document.getElementById('post-id').value = post.id;
        document.getElementById('post-title').value = post.title;
        document.getElementById('post-author').value = post.author;
        document.getElementById('post-password').value = post.password;
        document.getElementById('post-content').value = post.content;

        listView.style.display = 'none';
        formView.style.display = 'block';
    } else {
        alert('비밀번호가 틀렸습니다.');
    }
};

window.deletePost = (id) => {
    const post = posts.find(p => p.id == id);
    if (!post) return;

    const inputPass = prompt('삭제를 위해 비밀번호를 입력하세요:');
    if (inputPass === post.password) {
        if (confirm('정말로 이 글을 삭제하시겠습니까?')) {
            posts = posts.filter(p => p.id != id);
            savePosts();
        }
    } else if (inputPass !== null) {
        alert('비밀번호가 틀렸습니다.');
    }
};

window.replyPost = (id) => {
    const post = posts.find(p => p.id == id);
    if (!post) return;

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="reply-form-container">
            <h3>관리자 답변 작성</h3>
            <p style="margin-bottom: 20px; color: #666;">게시글: "${post.title}"</p>
            <div class="form-group" style="margin-bottom: 20px;">
                <label>관리자 비밀번호</label>
                <input type="password" id="admin-reply-pass" placeholder="비밀번호 입력" class="modal-input">
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
                <label>답변 내용</label>
                <textarea id="admin-reply-text" rows="5" class="modal-textarea" placeholder="이곳에 답변을 입력하세요...">${post.adminReply || ''}</textarea>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button onclick="closeModal()" class="action-btn" style="background: #eee; padding: 10px 20px; border-radius: 5px;">취소</button>
                <button onclick="submitAdminReply(${post.id})" class="action-btn" style="background: var(--accent-color); color: white; padding: 10px 20px; border-radius: 5px;">답변 등록</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
};

window.submitAdminReply = (id) => {
    const password = document.getElementById('admin-reply-pass').value;
    const replyText = document.getElementById('admin-reply-text').value;
    
    if (password === '1234') {
        const post = posts.find(p => p.id == id);
        post.adminReply = replyText;
        savePosts();
        alert('답변이 성공적으로 등록되었습니다.');
        document.getElementById('modal').style.display = 'none';
        renderPosts();
    } else {
        alert('관리자 비밀번호가 틀렸습니다.');
    }
};

// Initial Render
renderPosts();
