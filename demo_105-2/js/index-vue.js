// 當網頁載入完開始javascript
$(function() {

    var project_card_group = new Vue({
        el: '#project_card',
        data: {
            projects: [{
                    "no": 1,
                    "class": "資料科學",
                    "title": "台大管理學院的迷思",
                    "slide": "http://slides.com/pingping/deck",
                    "website": "https://pingping1127.github.io/Ping_hw0/Final_Project.html",
                    "team": "吳蔚平、林哲彣、禹翔仁、郭書瑋",
                    "photo": "https://www.ntu.edu.tw/images/photo/academicsPhoto_7.jpg"
                },
                {
                    "no": 2,
                    "class": "資料科學",
                    "title": "台大交換學生知多少",
                    "slide": "https://whirllllll.github.io/2017_data_course/project/final_project_ppt.html#/",
                    "website": "https://whirllllll.github.io/2017_data_course/project/final_project.html",
                    "team": "林以理、許祐瑄、朱文亞、廖俊翔",
                    "photo": "https://whirllllll.github.io/2017_data_course/project/cover.jpg"
                },
                {
                    "no": 3,
                    "class": "資料科學",
                    "title": "選擇大學 - 大學條件分析",
                    "slide": "http://slides.com/brant0723/deck#/",
                    "website": "https://feeatherwind.shinyapps.io/final/",
                    "team": "田少谷、陳羽渢、蔡以樂、陳安宇",
                    "photo": "https://drive.google.com/file/d/0B1xG2A0blOciUUpaSTZXc3gwQ1U/view"
                },
                {
                    "no": 4,
                    "class": "資料科學",
                    "title": "台大校園用電分析",
                    "slide": "http://slides.com/zachhuang/deck#/",
                    "website": "https://daweiho.github.io/105-2-R-HW-R05247008/20170626_105-2DSPR_FR.html",
                    "team": "何威融、黃俊逸、李夢雨、沈毓麟",
                    "photo": "http://cw1.tw/CW/images/article/C1452390996730.jpg"
                },
                {
                    "no": 5,
                    "class": "arduino",
                    "title": "敵人基地偵查車",
                    "slide": "https://docs.google.com/presentation/d/1XWs2BkIRUNReo94amEhsXrJVv8Yz11c7XcXm7xfyNRU/pub?start=false&loop=false&delayms=60000&slide=id.g239c96b1b4_0_1",
                    "website": "https://www.instructables.com/id/敵人基地偵查車",
                    "team": "機械四 鄭丞予、機械四 胡 翔、機械四 楊鈞凱",
                    "photo": "https://drive.google.com/open?id=0BzImOfbElqzYWmZxRG9oRlVsMUE"
                },
                {
                    "no": 6,
                    "class": "arduino",
                    "title": "自製MIDI控制器",
                    "slide": "https://docs.google.com/presentation/d/1flK_svjRlYLFJDYx9H-6fKOmqnFpMxoCaWdHOkQgWHo/pub?start=false&loop=false&delayms=60000&slide=id.p4",
                    "website": "https://www.youtube.com/watch?v=62QhnNpQFmM&feature=youtu.be",
                    "team": "化學四 劉嘉元、機械三 蘇邱弘",
                    "photo": "https://drive.google.com/open?id=0BzImOfbElqzYNkpOZjdxYzBOa0E"
                },
                {
                    "no": 7,
                    "class": "arduino",
                    "title": "遠端遙控冷氣",
                    "slide": "https://docs.google.com/presentation/d/1r0cX6wHyIO_OETAlw-5F2-a5XQvu5cNSe9R8-iSQwYc/embed?slide=id.p",
                    "website": "https://www.youtube.com/watch?v=ODFcnRwmt8M",
                    "team": "機械三 鄭乃節、經濟碩三 郝逸清",
                    "photo": "https://drive.google.com/open?id=0BzImOfbElqzYUy1QbDVMVVNGLVE"
                },
                {
                    "no": 8,
                    "class": "arduino",
                    "title": "Arbike - An Interactive Bike's Lighting System",
                    "slide": "https://www.slideshare.net/secret/2eN1pxI6yKo5ah",
                    "website": "http://www.instructables.com/id/Arduino-Arbike-a-Interactive-Bike-Lighting-System/",
                    "team": "機械三 李尚倫",
                    "photo": "https://drive.google.com/open?id=0BzImOfbElqzYNzRGT3JyU2w4UXc"
                },
                {
                    "no": 9,
                    "class": "Unity",
                    "title": "黑暗政治學",
                    "slide": "",
                    "website": "無",
                    "team": "郭育姍",
                    "photo": "吳家和 + 兩位朋友"
                },
                {
                    "no": 10,
                    "class": "Unity",
                    "title": "A Car Racing Game in Unity",
                    "slide": "https://docs.google.com/presentation/d/1AFwCFIQSoggDS6_WBMjqCQc9ivUna_hdlimoy6ViBaw/embed",
                    "website": "無",
                    "team": "鄭雅文",
                    "photo": ""
                },
                {
                    "no": 11,
                    "class": "Unity",
                    "title": "Where are you? (Unity Game)",
                    "slide": "https://docs.google.com/presentation/d/1sWOQYs8OaQf72hTUuSFUnCpBsp_ifOHUzkwUUfH6C6Y/embed",
                    "website": "無",
                    "team": "陳泂杋",
                    "photo": ""
                },
                {
                    "no": 12,
                    "class": "資料庫",
                    "title": "GRN visualization",
                    "slide": "https://www.icloud.com/keynote/0XwazdJfvPtRM4cSOP8pcj3Kg#grn-network",
                    "website": "",
                    "team": "林冠言、周昱達、葛竑志",
                    "photo": ""
                },
                {
                    "no": 13,
                    "class": "資料庫",
                    "title": "Expense Manager",
                    "slide": "http://www.evernote.com/l/Aahq0jAFyoRLcJ2LHOn6hDPVJa9JRyspZeU/",
                    "website": "http://www.evernote.com/l/AagWmdDtfUBPELhWbqfkUX4vjnSDkes1ENk/",
                    "team": "乃宥然",
                    "photo": ""
                },
                {
                    "no": 14,
                    "class": "資料庫",
                    "title": "IOT Assistant Anna",
                    "slide": "",
                    "website": "https://murmuring-woodland-20883.herokuapp.com/",
                    "team": "徐子秦",
                    "photo": ""
                },
                {
                    "no": 15,
                    "class": "資料庫",
                    "title": "NB-IOT自動化定位監測系統",
                    "slide": "",
                    "website": "",
                    "team": "林柏呈",
                    "photo": ""
                },
                {
                    "no": 16,
                    "class": "資料庫",
                    "title": "CoServing",
                    "slide": "",
                    "website": "",
                    "team": "蔡承諺、邱詩涵、黃繼瑜",
                    "photo": ""
                },
                {
                    "no": 17,
                    "class": "ios",
                    "title": "deepArt",
                    "slide": "https://docs.google.com/presentation/d/1W6TfywXZIpIOyBElCAmNs1aaNlzBpazYoBuhnegMmjA/edit#slide=id.g2395087088_0_6",
                    "website": "https://taiwan-art.kchen.club/",
                    "team": "葉宇心",
                    "photo": ""
                }
            ]
        },
        beforeCreate: function() {},
        updated: function() {}
    });



})