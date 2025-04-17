document.addEventListener("DOMContentLoaded", () => {
    const mission = document.querySelector(".v-mission");
    mission.addEventListener('click',function(){
        const m_para = document.getElementById('mission-paragraph');
        const vision = document.querySelector('.v-vision');
        m_para.style.display='block';
        const v_para = document.getElementById('vision-paragraph');
        v_para.style.display='none';
        mission.style.backgroundColor='orange';
        mission.style.color = 'white';
        vision.style.backgroundColor='white';
        vision.style.border = '2px solid orange';
        vision.style.color='black';
    })

    const vision = document.querySelector(".v-vision");
    vision.addEventListener('click',function(){
        const v_para = document.getElementById('vision-paragraph');
        const mission = document.querySelector('.v-mission');
        v_para.style.display='block';
        const m_para = document.getElementById('mission-paragraph');
        m_para.style.display='none';
        vision.style.backgroundColor='orange';
        vision.style.color = 'white';
        mission.style.backgroundColor='white';
        mission.style.color='black';
    })
});