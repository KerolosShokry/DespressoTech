document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.service-opt');
    const whatsappBtn = document.getElementById('whatsapp-btn');

    // رقم الواتساب المباشر الخاص بك
    const phoneNumber = "201140009830"; 

    whatsappBtn.addEventListener('click', () => {
        let selectedServices = [];

        checkboxes.forEach(box => {
            if (box.checked) {
                selectedServices.push(box.value);
            }
        });

        if (selectedServices.length === 0) {
            alert('من فضلك اختر مشكلة واحدة أو خدمة على الأقل!');
            return;
        }

        let message = `مرحباً Despresso Tech 👋%0Aأود الاستفسار وطلب فحص لجهازي بالنسبة للآتي:%0A`;
        selectedServices.forEach(s => {
            message += `- ${s}%0A`;
        });
        message += `%0Aأرجو التواصل معي لمعرفة التفاصيل والتكلفة المتوقعة.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
});