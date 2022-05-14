
function addDirection(dir_name, dir_descr, list_of_course) {
    html = `
    <div class="direction">
        <div class="direction_info">

            <div class="direction_name">
                <p class="direction_name_text">
                    ${dir_name}
                </p>
            </div>

            <div class="direction_description">
                <p class="direction_description_text">
                    ${dir_descr}
                </p>
            </div>

            <button class="direction_more_info">
                Узнать о курсах
            </button>

        </div>
        
        <div class="course_list">
            <table>`
    let col_count = 0;  
    list_of_course.forEach(element => {
        if (col_count % 3 === 0) {
            html += `<tr>`;
        }
        html += `<td>
        <button type="button" class="course_button" data-toggle="modal" data-target="#${element.key}">
            ${element.value}
        </button>
        </td>`
        if (col_count % 3 === 2) {
            html += `</tr>`;
        }
        col_count = col_count + 1;
    });
    if (col_count % 3 != 2) {
        html += `</tr>`;
    }

    html += ` </table>
        </div>

    </div>
    `
    const last_dir = Array.from(document.querySelectorAll('.list_of_directions')).pop();
    last_dir.insertAdjacentHTML('afterbegin', html);
}


let direct_name_1 = 'Я гей';
let direct_descr_1 = 'Тотальный гей';
let course_list_1 = [{key:'course_1_1', value:'Название курса'},
                    {key:'course_1_2', value:'Название курса'},
                    {key:'course_1_3', value:'Название курса'},
                    {key:'course_1_4', value:'Название курса'}];
addDirection(direct_name_1, direct_descr_1, course_list_1);

let direct_name_2 = 'Название направления';
let direct_descr_2 = 'Длинное описание направления, которое вы примерно выберите для обучения Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quidem consequatur odio non eos recusandae. Asperiores distinctio officia, cumque minima quisquam id voluptatum';
let course_list_2 = [{key:'course_2_1', value:'Название курса'},
                    {key:'course_2_2', value:'Название курса'},
                    {key:'course_2_3', value:'Название курса'},
                    {key:'course_2_4', value:'Название курса'},
                    {key:'course_2_5', value:'Название курса'},
                    {key:'course_2_6', value:'Название курса'}];
addDirection(direct_name_2, direct_descr_2, course_list_2);



let op_button = document.querySelectorAll('.direction_more_info');
for (let one_direction of op_button) {
    let dir_class_el = one_direction.closest('.direction'); 
    one_direction.addEventListener('click', function () {
    for (let elem of dir_class_el.children) {
        if (elem.className === 'course_list') {
            let num_of_tr = dir_class_el.children[1].children[0].children[0].children.length;
            if (elem.style.maxHeight) {
                elem.style.maxHeight = null;
            } else {
                elem.style.maxHeight = String(num_of_tr * 20) + 'vh';
            }
        }
    }
})
}

