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
        no: 2,
        title: 'V/ADJ + 아/어/여/해 도 되다 -> 도 돼요 (Được chứ?)',
        types: [],
        mean: 'Được không? được chứ? cũng được, được làm gì, làm gì cũng được làm gì không được.',
        exam: [{ korea: '여기에 앉아도 돼요?', vn: 'Tôi có thể ngồi đây được không?' }, { korea: '모르는 것이 있으면 질문해도 돼요.', vn: 'Nếu có điều gì không biết thì hỏi cũng được.' }]
    },
    {
        no: 3,
        title: 'V/A + 었어요/았어요/였어요 (Đã)',
        types: ['Hình thức trang trọng của mẫu câu này là :', '었습니다/았습니다/였습니다, 이었습니다/였습니다'],
        mean: 'Diễn tả hành động hoặc trạng thái nào đó đã diễn ra. Khi thân của động hoặc tính từ kết thúc bằng các nguyên âm không phải là ‘ㅏ,ㅑ,ㅗ’ thì sử dụng ‘-었어요’, khi kết thúc bằng một trong các nguyên âm ‘ㅏ,ㅑ,ㅗ’ thì sử dụng ‘-았어요’, khi kết thúc bằng ‘-하다’ thì sử dụng ‘-였어요’. Danh từ kết thúc bằng phụ âm thì sử dụng ‘이었어요’, kết thúc bằng nguyên âm thì sử dụng ‘였어요’',
        exam: [{ korea: '오늘 날씨가 추워요. 그래서 옷을 많이 입었어요.', vn: 'Hôm nay trời lạnh. Vì thế tôi đã mặc nhiều áo.' },
        { korea: '어제 배가 아팠어요. 그래서 잠을 못 잤어요.', vn: 'Hôm qua tôi bị đau bụng. Vì thế tôi không ngủ được.' },
        { korea: '지난 주말에 꽃구경을 했어요.', vn: 'Cuối tuần trước tôi đã ngắm hoa.' },
        ]
    },
    {
        no: 4,
        title: 'V + (으)려고 (Định, để làm gì)',
        types: [],
        mean: 'Gắn vào sau thân động từ, thể hiện ý định của chủ ngữ. Nếu V có phụ âm cuối kết hợp với 으려고, nếu động từ không có phụ âm cuối hoặc có phụ âm cuối ㄹ thì kết hợp với 려고',
        exam: [
            { korea: '사진을 찍으려고 카메라를 가져갔어요.', vn: 'Tôi đã mang theo máy ảnh để chụp ảnh.' },
            { korea: '과일을 사려고 시장에 갔어요.', vn: 'Tôi đã đi chợ để mua hoa quả.' },
            { korea: '김밥을 만들려고 재료를 살 거예요.', vn: 'Tôi sẽ mua nguyên liệu để làm cơm cuộn.' },
        ]
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
        let str = `<div class="training-items"> ${cur.no}
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
