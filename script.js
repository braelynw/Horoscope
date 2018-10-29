signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
messages = ["You will have a lot of success in the next two days",
"Keep an eye out for a suitcase today. It has 1 million dollars in it",
"You have keen sensitivities and sharp insights and intuition all year long",
"Look forward to success, praise, and pleasure, Aries! Settle down and work relentlessly toward career and self-improvement goals",
"Your goals and aspirations will not be denied. Make them big and noble",
"This is a year for you to start many new projects and begin exploring new avenues in life",
"You'll always have the skills and instincts to keep everything in balance and working smoothly. However, beware of surfing because I sense you have never been good at it",
"You're looking at a golden year, Leo",
"Virgo, 2018 is your year to get intense! Intensity has its ups and downs, and you can make the most of the ups while coping skillfully with any downs",
"Be prepared for people to look to you for advice and leadership. It will be easy and it will come naturally, so relax and enjoy the attention",
"You have a severe allergy to pasta. Avoid all mac n' cheese this year",
"You are the best sign. Your planet Jupiter is powerful and ambitious and will keep you going full blast in the direction that moves you forward"];
images = ["img/capricorn.jpg", "img/aquarius.jpg", "img/pisces.jpg",
    "img/aries.jpg", "img/taurus.jpg", "img/gemini.jpg", "img/cancer.jpg", "img/leo.jpg",
    "img/virgo.jpg", "img/libra.jpg", "img/scorpio.jpg", "img/sagittarius.jpg"];


function determineHoroscope() {
    var horoscope = "";
    var name = document.getElementById("myName").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    console.log(name);
    console.log(month);

    var sign = determineSign(day,month);

    document.getElementById("yourName").innerHTML = "Hi " + name + "!" ;

    var birthday = todayIsBirthday(month, day);

    document.getElementById("output2").innerHTML = signs[sign];
    document.getElementById("output3").innerHTML = messages[sign];
    console.log(sign);
    document.getElementById("zImage").src = images[sign];

}

function determineSign(day,month) {


    //Dec 22 - Jan 19
    if (month == 12 && day <=22 || month == 1 && day <=19){
    // sign = "Capricorn";
    // horoscope = "You will have a lot of success in the next two days";
        return 0;
    }

    //Jan 20 - Feb 18
    if (month == 1 && day >= 20 || month == 2 && day <=19){
        //sign = "Aquarius";
        //horoscope = "Keep an eye out for a suitcase today. It has 1 million dollars in it";
        return 1;
    }

    //Feb 19 - March 20
    if (month == 2 && day >= 19 && day <=29 || month == 3 && day <=20){
        // sign = "Pisces";
        // horoscope = "You have keen sensitivities and sharp insights and intuition all year long";
        return 2;
    }

    //Mar 21 - Apr 19
    if (month == 3 && day >=21 || month == 4 && day >=19){
        // sign = "Aries";
        // horoscope = "Look forward to success, praise, and pleasure, Aries! Settle down and work relentlessly toward career and self-improvement goals";
        return 3;
    }

    //Apr 20 - May 20
    if (month == 4 && day >=20 && day <=30 || month == 5 && day<=20){
        // sign = "Taurus";
        // horoscope = "Your goals and aspirations will not be denied. Make them big and noble";
        return 4;
    }

    //May 21 - Jun 20
    if (month == 5 && day >=21 || month ==6 && day <=20){
        // sign = "Gemini";
        // horoscope = "This is a year for you to start many new projects and begin exploring new avenues in life";
        return 5;
    }

    //Jun 21 - Jul 22
    if (month == 6 && day>=21 && day<=30 || month == 7 && day <=22){
        // sign = "Cancer";
        // horoscope = "You'll always have the skills and instincts to keep everything in balance and working smoothly. Beware of surfing";
        return 6;
    }

    //Jul 23 - Aug 22
    if (month == 7 && day >=23 || month == 8 && day <=22){
        // sign = "Leo";
        // horoscope = "You're looking at a golden year, Leo";
        return 7;
    }

    //Aug 23 - Sep 22
    if (month == 8 && day>=22 || month == 9 && day<=22){
        // sign = "Virgo";
        // horoscope = "Virgo, 2018 is your year to get intense! Intensity has its ups and downs, and you can make the most of the ups while coping skillfully with any downs";
        return 8;
    }

    //Sep 23 - Oct 22
    if (month == 9 && day >=23 && day<=30 || month == 10 && day<=22){
        // sign = "Libra";
        // horoscope = "Be prepared for people to look to you for advice and leadership. It will be easy and it will come naturally, so relax and enjoy the attention";
        return 9;
    }

    //Oct 23 - Nov 21
    if (month == 10 && day >=23 || month ==11 && day <=21){
        // sign = "Scorpio";
        // horoscope = "You have a severe allergy to pasta. Avoid all mac n' cheese this year";
        return 10;
    }

    //Nov 22 - Dec 21
    if (month == 11 && day >=22 || month == 12 &&  day <=21){
        // sign = "Sagittarius";
        // horoscope = "Your planet Jupiter is powerful and ambitious and will keep you going full blast in the direction that moves you forward";
        return 11;
    }
}

function notADay(day) {
    console.log(day)
    var month = document.getElementById("month").value;
    console.log(month)
    if (month == 2 && day > 28 || month == 4 && day > 30 || month == 6 && day > 30 || month == 9 && day > 30 || month == 11 && day > 30) {
        document.getElementById("myButton").disabled = true;
    } else {
        document.getElementById("myButton").disabled = false;

    }
}



function todayIsBirthday(month, day){
    var today = new Date();
    var date = today.getDate();
    var monen = today.getMonth()+1;

    if (date == day && monen == month){
        document.getElementById("output").innerHTML = "Happy Birthday! Congratulations on completing an amazing year - hard work will lead to succcess in your future.";

    }
}






