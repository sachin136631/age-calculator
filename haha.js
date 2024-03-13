function changer(){
    document.getElementById("f1").style.borderColor="red";
    document.getElementById("f2").style.borderColor="red";
    document.getElementById("f3").style.borderColor="red";
    document.querySelectorAll("p")[0].style.color="red";
    document.querySelectorAll("p")[1].style.color="red";
    document.querySelectorAll("p")[2].style.color="red";
    alert("enter a valid date   :)");
}

document.querySelector("button").addEventListener("click",function(){
    let days=parseInt(document.getElementById("f1").value);
    let months=parseInt(document.getElementById("f2").value);
    let years=parseInt(document.getElementById("f3").value);
    var d=new Date();
    
    if (isNaN(days) || isNaN(months) || isNaN(years)){
        changer();
    }
    
    else if(days>31 || months>12 || days<1 ||months<1 ||years >=d.getFullYear()){
        changer();
    }

    else if (months===2 ||  months===4 || months===6 || months===9 || months===11){
        if(days>30){
            changer();
        }
    }

    else if(years%4===0 && years%100===0 && years%400===0){
        if(months===2){
            if(days>29){
                changer();
            }
            else{
                if(days<=d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;

                }

                else if(days>d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+29-days;
                }

                else if(days>d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+29-days;
                }

                else if(days<=d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                }
            }
        }
        else if (months===4 || months===6 || months===9 || months===11){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }

        }
        else if(months===1||months===3||months===5||months===7||months===8||months===10||months===12){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }
        }
    }    else if(years%4===0 && years%100===0 && years%400!=0){
        if(months===2){
            if(days>28){
                changer();
            }
            else{
                if(days<=d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;

                }

                else if(days>d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+28-days;
                }

                else if(days>d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+28-days;
                }

                else if(days<=d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                }
            }
        }
        else if (months===4 || months===6 || months===9 || months===11){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }

        }
        else if(months===1||months===3||months===5||months===7||months===8||months===10||months===12){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }
        }
    }    else if(years%4===0 && years%100!=0){
        if(months===2){
            if(days>29){
                changer();
            }
            else{
                if(days<=d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;

                }

                else if(days>d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+29-days;
                }

                else if(days>d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+29-days;
                }

                else if(days<=d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                }
            }
        }
        else if (months===4 || months===6 || months===9 || months===11){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }

        }
        else if(months===1||months===3||months===5||months===7||months===8||months===10||months===12){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }
        }
    }else{
        if(months===2){
            if(days>28){
                changer();
            }
            else{
                if(days<=d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;

                }

                else if(days>d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+28-days;
                }

                else if(days>d.getDate() && months<=d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years;
                    document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                    document.querySelector(".three").innerHTML=d.getDate()+28-days;
                }

                else if(days<=d.getDate() && months>d.getMonth()+1){
                    document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                    document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                    document.querySelector(".three").innerHTML=d.getDate()-days;
                }
            }
        }
        else if (months===4 || months===6 || months===9 || months===11){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+30-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }

        }
        else if(months===1||months===3||months===5||months===7||months===8||months===10||months===12){
            if(days<=d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".three").innerHTML=d.getDate()-days;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".one").innerHTML=d.getFullYear()-years;

            }

            else if(days>d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days>d.getDate() && months<=d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years;
                document.querySelector(".two").innerHTML=(d.getMonth()+1)-months;
                document.querySelector(".three").innerHTML=d.getDate()+31-days;
            }

            else if(days<=d.getDate() && months>d.getMonth()+1){
                document.querySelector(".one").innerHTML=d.getFullYear()-years-1;
                document.querySelector(".two").innerHTML=(d.getMonth()+12)-months;
                document.querySelector(".three").innerHTML=d.getDate()-days;
            }
        }
    }
});