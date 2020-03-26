
calcBtnClick = (val) => {
    $('#answerInput').val($('#answerInput').val() + val);
}

calculateValue = () => {
    try {
        $('#answerInput').val(eval($('#answerInput').val()));
    } catch (err) {
        alert(`Oops! ${$('#answerInput').val()} is invalid. Please correct the expression.`)
    }
}

clearAll = ()=>{
    $('#answerInput').val('');
}

removeLast = () =>{
   let newValue = $('#answerInput').val().slice(0, $('#answerInput').val().length - 1);
   $('#answerInput').val(newValue);
}