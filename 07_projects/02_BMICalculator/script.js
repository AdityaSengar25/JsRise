const form = document.querySelector('form');

// if we will take values here, then we will get empty values
// const height =parseInt(document.querySelector('#height').value)


form.addEventListener('submit',(e)=>{
e.preventDefault();

const height =parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#weight').value)
const result = document.querySelector("#results")

result.innerHTML="";

if( height<0 || isNaN(height)){
    result.textContent = `Please enter a valid height ${height}`;
    return;
}
else if( weight<0 || isNaN(weight)){
    result.textContent = `Please enter a valid weight ${weight}`;
    return;
}

    const bmi = (weight/(height/100)**2).toFixed(2);
    const bmiline = document.createElement('p');
    bmiline.textContent = `Your BMI is ${bmi}`;

    const nxtline= document.createElement('p')
    if(bmi<18.5){
        nxtline.textContent = `you are underweight`;
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        nxtline.textContent = `you are normal weight`;
    }
    else{
        nxtline.textContent = `you are overweight`;
    }

    result.appendChild(bmiline);
    result.appendChild(nxtline);

})