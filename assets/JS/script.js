
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
        <button type="button" class="course_button" data-toggle="modal" data-target="#${element.id}">
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
    for (let i = 0; i < list_of_course.length; i++) {
        html+=addModal(list_of_course[i].value, list_of_course[i].id, list_of_course[i].term, list_of_course[i].desciption);
    }

    const last_dir = Array.from(document.querySelectorAll('.list_of_directions')).pop();
    last_dir.insertAdjacentHTML('afterbegin', html);
}


function addModal(course_name, course_id, course_term, course_description) {
    html = `
        <div class="modal fade" id="${course_id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">${course_name}</h4>
                        <div class="close-button-container">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                        </div>                   
                    </div>

                    <div class="study-term">
                        <p class="study-term-text">Срок обучения:&nbsp;</p>
                        <p class="study-term-val">${course_term} месяца</p>
                    </div>

                    <div class="modal-description">
                        <p class="modal-description-text">${course_description}</p>
                    </div>

                    <button type="button" class="sign-up-button" data-toggle="modal" data-target="#sign-up-modal" data-dismiss="modal">
                        Записаться на обучение
                    </button>
                </div>
            </div>
        </div>`

    return html;
}

function addClassList() {
    let container_width = document.querySelectorAll('.modal-lg');
    console.log(container_width);
}

let direct_name_1 = 'Я гей';
let direct_descr_1 = 'Тотальный гей';
let course_descr_text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt asperiores accusantium minus nemo, molestiae, dignissimos consequuntur soluta quisquam obcaecati fugiat voluptas recusandae a, tempore qui eaque nihil vitae! Iusto mollitia nesciunt dolores ipsam quod vel modi aliquid dolorem corporis, quia commodi ullam culpa repudiandae aperiam nemo. Sequi ullam laboriosam, minima dolore ex suscipit deserunt, cumque atque modi dolores nemo, quas nisi vero aut rerum. Praesentium hic maxime est, esse odit repudiandae aliquid architecto ipsum natus omnis molestiae voluptas, dolorem animi veniam repellendus dolore rerum. Fuga dolores vero quibusdam magni qui, minus temporibus officia deleniti repudiandae, eveniet similique facilis, dicta corporis.'
let course_list_1 = [{id:'course_1_1', value:'Название курса', term: 1234, desciption: 'Я чмо'},
                    {id:'course_1_2', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_1_3', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_1_4', value:'Название курса', term: 4, desciption: course_descr_text}];
addDirection(direct_name_1, direct_descr_1, course_list_1);

let direct_name_2 = 'Название направления';
let direct_descr_2 = 'Длинное описание направления, которое вы примерно выберите для обучения Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quidem consequatur odio non eos recusandae. Asperiores distinctio officia, cumque minima quisquam id voluptatum';
let course_list_2 = [{id:'course_2_1', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_2_2', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_2_3', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_2_4', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_2_5', value:'Название курса', term: 4, desciption: course_descr_text},
                    {id:'course_2_6', value:'Название курса', term: 4, desciption: course_descr_text}];
addDirection(direct_name_2, direct_descr_2, course_list_2);

addClassList();

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

// kek

