/**
 * Created by asy on 2018-12-7.
 */

var animationArr = [
    {
        inAnimation: function () {
            var homeList = document.querySelector(".homeList")
            var homeIcons = document.querySelector(".smallDot")

            homeList.style.transform = 'translate(0,0)';
            homeIcons.style.transform = 'translate(0,0)';
            homeList.style.opacity = '1';
            homeIcons.style.opacity = '1';
        },
        outAnimation: function () {
            var homeList = document.querySelector(".homeList")
            var homeIcons = document.querySelector(".smallDot")

            homeList.style.transform = 'translate(0,-200px)';
            homeIcons.style.transform = 'translate(0,200px)';
            homeList.style.opacity = '0';
            homeIcons.style.opacity = '0';
        },
    },
    {
        inAnimation: function () {
            var p1 = document.querySelector(".plane_1")
            var p2 = document.querySelector(".plane_2")
            var p3 = document.querySelector(".plane_3")

            p1.style.transform = 'translate(0,0)'
            p2.style.transform = 'translate(0,0)'
            p3.style.transform = 'translate(0,0)'
        },
        outAnimation: function () {
            var p1 = document.querySelector(".plane_1")
            var p2 = document.querySelector(".plane_2")
            var p3 = document.querySelector(".plane_3")


            p1.style.transform = 'translate(-200px,-200px)'
            p2.style.transform = 'translate(-200px,200px)'
            p3.style.transform = 'translate(200px,-200px)'
        },
    },
    {
        inAnimation: function () {
            var p1 = document.querySelector(".pencil_1")
            var p2= document.querySelector(".pencil_2")
            var p3 = document.querySelector(".pencil_3")

            p1.style.transform = 'translate(0,0)';
            p2.style.transform = 'translate(0,0)';
            p3.style.transform = 'translate(0,0)';
        },
        outAnimation: function () {
            var p1 = document.querySelector(".pencil_1")
            var p2= document.querySelector(".pencil_2")
            var p3 = document.querySelector(".pencil_3")

            p1.style.transform = 'translate(0,-200px)';
            p2.style.transform = 'translate(0,200px)';
            p3.style.transform = 'translate(200px,200px)';
        },
    },
    {
        inAnimation: function () {
            var a1 = document.querySelector('.about_3')
            var a2 = document.querySelector('.about_4')

            a1.style.transform = 'rotate(0)';
            a2.style.transform = 'rotate(0)';
        },
        outAnimation: function () {
            var a1 = document.querySelector('.about_3')
            var a2 = document.querySelector('.about_4')

            a1.style.transform = 'rotate(30deg)';
            a2.style.transform = 'rotate(-30deg)';
        },
    },
    {
        inAnimation: function () {
            var t1 = document.querySelector('.team1')
            var t2 = document.querySelector('.team2')

            t1.style.transform = 'translate(0,0)';
            t2.style.transform = 'translate(0,0)';
        },
        outAnimation: function () {
            var t1 = document.querySelector('.team1')
            var t2 = document.querySelector('.team2')

            t1.style.transform = 'translate(-200px,0)';
            t2.style.transform = 'translate(200px,0)';
        },
    },
]
