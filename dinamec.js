$(document).ready(function() {
    $("button").click(function(){
        let btv = $(this).val()
       let inv =  $("input").val()
       if (btv == "equal-sign"){
        let result = eval(inv);
        $("input").val(result)
        return;
    }
    if (btv == "equal-sign"){
        return;
    }
    if (btv == "all-clear"){
        $("input").val("")
        return;
    }
    if (btv == "all-clear"){
        return;
    }
       $("input").val(inv+btv)

       const inputField = $("input");
       const maxLength = 15;
       if (inv.length > maxLength) {
        // إخفاء أول حرف ولكن دون مسحه
        let hiddenValue = inv.slice(1); // الحصول على النص دون أول حرف
        inputField.data('hiddenValue', inv); // تخزين القيمة الأصلية
        inputField.val(hiddenValue); // تحديث العرض في حقل الإدخال

    }
});
    $("input").on("focus", function() {
        $(this).val($(this).data('hiddenValue')); // استرجاع القيمة الأصلية عند تركيز المستخدم
    });
$(".equal-sign").click(function(){
    let o_inva = $("input").val()
    $("input").val(o_inva);
})











});
