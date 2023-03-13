const elContainer = document.getElementsByClassName('container')[0];
var grammars = [
    {
        no: 1,
        title: 'V + 지 말다 (Đừng)',
        types: ['V + 지 마세요 (Dạng kính ngữ)', 'V + 지 마십시오 (Dạng trang trọng)', 'Dạng thỉnh dụ: 지 맙시다 Hoặc 지 말까요?'],
        mean: 'Khi liên kết 지 말다 với 고 thành dạng A 지 말고 B sử dụng đề nghị đề xuất với người nghe việc B thay cho việc A',
        exam: [{ korea: '지금 가지 말고 내일 가세요', vn: 'Bây giờ đừng đi mà để mai đi' }]
    },
    {
        no: 1,
        title: 'V/ADJ + 아/어/여/해 도 되다 -> 도 돼요 (Được chứ?)',
        types: [],
        mean: 'Được không? được chứ? cũng được, được làm gì, làm gì cũng được làm gì không được.',
        exam: [{ korea: '여기에 앉아도 돼요?', vn: 'Tôi có thể ngồi đây được không?' }, { korea: '모르는 것이 있으면 질문해도 돼요.', vn: 'Nếu có điều gì không biết thì hỏi cũng được.' }]
    }
]
function renderTypes(types) {
    let str2 = "";
    types.forEach((el, i) => {
        str2 += `<p>${el} </p>`
    })
    return str2;
}
function renderExams(exams) {
    let exam = "";
    exams.forEach((el, i) => {
        exam += `<p class="korea">${el.korea}</p>
        <p class="vn">${el.vn}</p>`

    })
    return exam;
}
function renderHTML(datas) {
    datas.forEach((cur, index, arr) => {
        cur.types.forEach((types, i) => {

        });
        let str = `<div class="training-items">
        <img src="" alt="">
        <h3 class="title">${cur.title}</h3>
        <div class="types">
        ${renderTypes(cur.types)}
        </div>
        <p class="mean">${cur.mean}</p>
        <div class="exams">
            <p>EX:</p>
            ${renderExams(cur.exam)}
        </div>
    
        <!-- <button>Read More</button> -->
    </div>`
        elContainer.insertAdjacentHTML('beforeend', str);
    });
}
renderHTML(grammars);
