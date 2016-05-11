<<<<<<< .mine
$(document).ready(function () {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar').fullCalendar({

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: false,
        selectHelper: true,
        select: function (start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        editable: false,





        // add event name to title attribute on mouseover
        // eventMouseover: function(event, jsEvent, view) {
        //  if (view.name !== 'agendaDay') {
        //    $(jsEvent.target).attr('title', event.title);
        //   }
        //   },


        eventClick: function (event) {
            if (event.url) {
                window.open(event.url, "", "width=520, height=345");
                return false;
            }
        },

        eventRender: function (event, element) {
            element.find('.fc-event-title').html(element.find('span.fc-event-title').text())//.append("" + event.description); 
        },






        events: [
            /*
                title: '<strong>All Day Event</strong>',
                description:'This is a Description. This will wrap around the title information... hopefully.',
                start: new Date(y, m, 1)
                
            },
            {
                title: 'Long Event',
                description:'This is a Description',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                description:'This is a Description',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
            id: 999,
                title: 'Repeating Event',
                description:'This is a Description',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            */

            //2014 Federal Holidays
             {
                 title: 'New Years Day',
                 //description: 'This is a Description',
                 start: new Date(y, 0, 1),
                 color: '#00fb0c'

             },
              {
                  title: 'Birthday of Martin Luther King, Jr.',
                  //description: 'This is a Description',
                  start: new Date(y, 0, 20),
                  color: '#00fb0c'


              },
               {
                   title: 'Washingtons Birthday',
                   //description: 'This is a Description',
                   start: new Date(y, 1, 17),
                   color: '#00fb0c'

               },
                {
                    title: 'Memorial Day',
                    //description: 'This is a Description',
                    start: new Date(y, 4, 26),
                    color: '#00fb0c'

                },
                {
                    title: 'Independence Day',
                    //description: 'This is a Description',
                    start: new Date(y, 6, 04),
                    color: '#00fb0c'


                },
                {
                    title: 'Labor Day',
                    //description: 'This is a Description',
                    start: new Date(y, 8, 01),
                    color: '#00fb0c'

                },
                 {
                     title: 'Columbus Day',
                     //description: 'This is a Description',
                     start: new Date(y, 9, 13),
                     color: '#00fb0c'

                 },
                  {
                      title: 'Veterans Day',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 11),
                      color: '#00fb0c'

                  },
                  {
                      title: 'Thanksgiving Day',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 27),
                      color: '#00fb0c'

                  },
                  {
                      title: 'Christmas Day',
                      //description: 'This is a Description',
                      start: new Date(y, 11, 25),
                      color: '#00fb0c'

                  },

                  {
                      title: '<strong>Challenge Training: External RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(y, 8, 2, 00, 00),
                      end: new Date(y, 8, 2, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge9_02_14/',
                      color: 'purple'



                  },

                  {
                        title: '<strong>Challenge Training: VSR and internal RVSR IWT Training Begins</strong>',
                        //description: 'This is a Description',
                        start: new Date(y, 8, 8, 00, 00),
                        end: new Date(y, 8, 8, 00, 00),
                        allDay: true,
                        url: '../../Events/Chalenge9_08_14/',
                        color: 'purple'



                  },

                    {
                        title: '<strong>Challenge Training: VSR IWT and External RVSR IWT Training Begins</strong>',
                        //description: 'This is a Description',
                        start: new Date(y, 10, 10, 00, 00),
                        end: new Date(y, 10, 10, 00, 00),
                        allDay: true,
                        url: '../../Events/Chalenge11_10_14/',
                        color: 'purple'



                    },

                  {
                      title: '<strong>Challenge Training: Internal RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 17, 00, 00),
                      end: new Date(y, 10, 17, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge11_17_14/',
                      color: 'purple'



                  },

                     {
                         title: '<strong>Challenge Training: VSR IWT and External RVSR IWT Training Begins</strong>',
                         //description: 'This is a Description',
                         start: new Date(2015, 0, 5, 00, 00),
                         end: new Date(2015, 0, 5, 00, 00),
                         allDay: true,
                         url: '../../Events/Chalenge1_05_15/',
                         color: 'purple'



                     },

                  {
                      title: '<strong>Challenge Training: Internal RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(2015, 0, 12, 00, 00),
                      end: new Date(2015, 0, 12, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge1_12_15/',
                      color: 'purple'



                  },

                   {
                       title: '<strong>Challenge Training: External RVSR IWT Training Begins </strong>',
                       //description: 'This is a Description',
                       start: new Date(2015, 2, 2, 00, 00),
                       end: new Date(2015, 2, 2, 00, 00),
                       allDay: true,
                       url: '../../Events/Chalenge3_02_15/',
                       color: 'purple'



                   },

                  {
                      title: '<strong>Challenge Training: VSR and Internal RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(2015, 2, 9, 00, 00),
                      end: new Date(2015, 2, 9, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge3_09_15/',
                      color: 'purple'



                  },

                   {
                       title: '<strong>Challenge Training: External RVSR IWT Training Begins </strong>',
                       //description: 'This is a Description',
                       start: new Date(2015, 4, 26, 00, 00),
                       end: new Date(2015, 4, 26, 00, 00),
                       allDay: true,
                       url: '../../Events/Chalenge5_26_15/',
                       color: 'purple'



                   },

                  {
                      title: '<strong>Challenge Training: Internal RVSR and VSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(2015, 5, 1, 00, 00),
                      end: new Date(2015, 5, 1, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge6_01_15/',
                      color: 'purple'



                  },


                  {
                      title: '<strong>Challenge Training: External RVSR IWT Training Begins </strong>',
                      //description: 'This is a Description',
                      start: new Date(2015, 6, 6, 00, 00),
                      end: new Date(2015, 6, 6, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge7_06_15/',
                      color: 'purple'



                  },

                  {
                      title: '<strong>Challenge Training: VSR and Internal RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(2015, 6, 13, 00, 00),
                      end: new Date(2015, 6, 13, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge7_13_15/',
                      color: 'purple'



                  },

                    {
                        title: '<strong>Challenge Training: External RVSR IWT Training Begins </strong>',
                        //description: 'This is a Description',
                        start: new Date(2015, 8, 8, 00, 00),
                        end: new Date(2015, 8, 8, 00, 00),
                        allDay: true,
                        url: '../../Events/Chalenge9_08_15/',
                        color: 'purple'



                    },

                  {
                      title: '<strong>Challenge Training: VSR IWT and Internal RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(2015, 8, 14, 00, 00),
                      end: new Date(2015, 8, 4, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge9_14_15/',
                      color: 'purple'



                  },


            {
                title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                //description: 'This is a Description',
                start: new Date(y, 5, 5, 13, 00),
                end: new Date(y, 5, 5, 14, 30),
                allDay: false,
                url: '../../Events/TMSCall/',
                color: 'red'



            },
             {
                 title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                 //description: 'This is a Description',
                 start: new Date(y, 5, 12, 13, 00),
                 end: new Date(y, 5, 12, 14, 30),
                 allDay: false,
                 url: '../../Events/TMSCall/',
                 color: 'red'

             },
             {
                 title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                 //description: 'This is a Description',
                 start: new Date(y, 5, 19, 13, 00),
                 end: new Date(y, 5, 19, 14, 30),
                 allDay: false,
                 url: '../../Events/TMSCall/',
                 color: 'red'

             },
               {
                   title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                   // description: 'This is a Description',
                   start: new Date(y, 5, 26, 13, 00),
                   end: new Date(y, 5, 26, 14, 30),
                   allDay: false,
                   url: '../../Events/TMSCall/',
                   color: 'red'

               },
               {
                   title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                   // description: 'This is a Description',
                   start: new Date(y, 6, 3, 13, 00),
                   end: new Date(y, 6, 3, 14, 30),
                   allDay: false,
                   url: '../../Events/TMSCall/',
                   color: 'red'
               },
               {
                   title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                   // description: 'This is a Description',
                   start: new Date(y, 6, 10, 13, 00),
                   end: new Date(y, 6, 10, 14, 30),
                   allDay: false,
                   url: '../../Events/TMSCall/',
                   color: 'red'

               },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 6, 17, 13, 00),
                    end: new Date(y, 6, 17, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 6, 24, 13, 00),
                    end: new Date(y, 6, 24, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 6, 31, 13, 00),
                    end: new Date(y, 6, 31, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 7, 13, 00),
                    end: new Date(y, 7, 7, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 14, 13, 00),
                    end: new Date(y, 7, 14, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 21, 13, 00),
                    end: new Date(y, 7, 21, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                {
                    title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 28, 13, 00),
                    end: new Date(y, 7, 28, 14, 30),
                    allDay: false,
                    url: '../../Events/TMSCall/',
                    color: 'red'

                },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 4, 13, 00),
                     end: new Date(y, 8, 4, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 11, 13, 00),
                     end: new Date(y, 8, 11, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 18, 13, 00),
                     end: new Date(y, 8, 18, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 25, 13, 00),
                     end: new Date(y, 8, 25, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 2, 13, 00),
                     end: new Date(y, 9, 2, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 9, 13, 00),
                     end: new Date(y, 9, 9, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 16, 13, 00),
                     end: new Date(y, 9, 16, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 23, 13, 00),
                     end: new Date(y, 9, 23, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 30, 13, 00),
                     end: new Date(y, 9, 30, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 10, 6, 13, 00),
                     end: new Date(y, 10, 6, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },

                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 10, 13, 13, 00),
                     end: new Date(y, 10, 13, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 10, 20, 13, 00),
                     end: new Date(y, 10, 20, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },

                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 11, 4, 13, 00),
                     end: new Date(y, 11, 4, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 11, 11, 13, 00),
                     end: new Date(y, 11, 11, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },
                 {
                     title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 11, 18, 13, 00),
                     end: new Date(y, 11, 18, 14, 30),
                     allDay: false,
                     url: '../../Events/TMSCall/',
                     color: 'red'

                 },


                  {
                      title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 6, 3, 14, 30),
                      end: new Date(y, 6, 3, 15, 30),
                      allDay: false,
                      color: '#f0ff00',


                  },
               {
                   title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                   // description: 'This is a Description',
                   start: new Date(y, 6, 10, 14, 30),
                   end: new Date(y, 6, 10, 15, 30),
                   allDay: false,
                   color: '#f0ff00',



               },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 6, 17, 14, 30),
                    end: new Date(y, 6, 17, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 6, 24, 14, 30),
                    end: new Date(y, 6, 24, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 6, 31, 14, 30),
                    end: new Date(y, 6, 31, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 7, 14, 30),
                    end: new Date(y, 7, 7, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 14, 14, 30),
                    end: new Date(y, 7, 14, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 21, 14, 30),
                    end: new Date(y, 7, 21, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 7, 28, 14, 30),
                    end: new Date(y, 7, 28, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 4, 14, 30),
                     end: new Date(y, 8, 4, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 11, 14, 30),
                     end: new Date(y, 8, 11, 15, 30),
                     allDay: false,
                     color: '#f0ff00',


                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 18, 14, 30),
                     end: new Date(y, 8, 18, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 8, 25, 14, 30),
                     end: new Date(y, 8, 25, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 2, 14, 30),
                     end: new Date(y, 9, 2, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 9, 14, 30),
                     end: new Date(y, 9, 9, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 16, 14, 30),
                     end: new Date(y, 9, 16, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 23, 14, 30),
                     end: new Date(y, 9, 23, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 9, 30, 14, 30),
                     end: new Date(y, 9, 30, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 10, 6, 14, 30),
                     end: new Date(y, 10, 6, 15, 30),
                     allDay: false,
                     color: '#f0ff00',


                 },

                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 10, 13, 14, 30),
                     end: new Date(y, 10, 13, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 10, 20, 14, 30),
                     end: new Date(y, 10, 20, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },

                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 11, 4, 14, 30),
                     end: new Date(y, 11, 4, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 11, 11, 14, 30),
                     end: new Date(y, 11, 11, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },
                 {
                     title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 11, 18, 14, 30),
                     end: new Date(y, 11, 18, 15, 30),
                     allDay: false,
                     color: '#f0ff00',



                 },

                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 5, 5, 14, 30),
                    end: new Date(y, 5, 5, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    //description: 'This is a Description',
                    start: new Date(y, 5, 12, 14, 30),
                    end: new Date(y, 5, 12, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    //description: 'This is a Description',
                    start: new Date(y, 5, 19, 14, 30),
                    end: new Date(y, 5, 19, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 5, 26, 14, 30),
                    end: new Date(y, 5, 26, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                 {
                     title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 26, 11, 00),
                     end: new Date(y, 5, 26, 12, 00),
                     allDay: false,
                     color: '#000',
                     url: '../../Events/VSCMCall6_26_14/'

                 },

                  {
                      title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 6, 24, 11, 00),
                      end: new Date(y, 6, 24, 12, 00),
                      allDay: false,
                      color: '#000',
                      url: '../../Events/VSCMCall7_24_14/'

                  },
                  {
                      title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 7, 28, 11, 00),
                      end: new Date(y, 7, 28, 12, 00),
                      allDay: false,
                      color: '#000',
                      url: '../../Events/VSCMCall8_28_14/'

                  },

                  {
                      title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 8, 25, 11, 00),
                      end: new Date(y, 8, 25, 12, 00),
                      allDay: false,
                      color: '#000',
                      url: '../../Events/VSCMCall9_25_14/'

                  },
                  {
                      title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 9, 23, 11, 00),
                      end: new Date(y, 9, 23, 12, 00),
                      allDay: false,
                      color: '#000',
                      url: '../../Events/VSCMCall10_23_14/'

                  },

                 {
                     title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 24, 14, 00),
                     end: new Date(y, 5, 24, 15, 00),
                     allDay: false,
                     color: '#ff00cc',
                     url: '../../Events/TMCall6_24_14/'

                 },
                 {
                     title: '<strong>:00-4:00 PM (ET) TM Summer Learning Event</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 24, 15, 00),
                     end: new Date(y, 5, 24, 16, 00),
                     allDay: false,
                     color: '#00e4ff',
                     url: '../../Events/TMSummer6_24_14/'

                 },
                 {
                     title: '<strong>:00-2:00 PM (ET) TM Summer Learning Event</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 7, 05, 13, 00),
                     end: new Date(y, 7, 05, 14, 00),
                     allDay: false,
                     color: '#00e4ff',
                     url: '../../Events/TMSummer8_5_14/'

                 },

                  {
                      title: '<strong>:00-3:00 PM (ET) TM Summer Learning Event</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 7, 26, 13, 00),
                      end: new Date(y, 7, 26, 15, 00),
                      allDay: false,
                      color: '#00e4ff',
                      url: '../../Events/TMSummer8_26_14/'

                  },

                  {
                      title: '<strong>:00-3:00 PM (ET) TM Summer Learning Event</strong>',
                      // description: 'This is a Description',
                      start: new Date(y, 8, 23, 13, 00),
                      end: new Date(y, 8, 23, 15, 00),
                      allDay: false,
                      color: '#00e4ff',
                      url: '../../Events/TMSummer9_23_14/'

                  },


                   {
                       title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                       // description: 'This is a Description',
                       start: new Date(y, 9, 28, 14, 00),
                       end: new Date(y, 9, 28, 15, 00),
                       allDay: false,
                       color: '#ff00cc',
                       url: '../../Events/TMCall10_28_14/'


                   },
                   {
                       title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                       // description: 'This is a Description',
                       start: new Date(y, 10, 25, 14, 00),
                       end: new Date(y, 10, 25, 15, 00),
                       allDay: false,
                       color: '#ff00cc',
                       url: '../../Events/TMCall11_25_14/'


                   },
                   {
                       title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                       // description: 'This is a Description',
                       start: new Date(y, 11, 23, 14, 00),
                       end: new Date(y, 11, 23, 15, 00),
                       allDay: false,
                       color: '#ff00cc',
                       url: '../../Events/TMCall12_23_14/'


                   },
                    {
                        title: '<strong>DRO Skills Certification Test</strong>',
                        // description: 'This is a Description',
                        start: new Date(y, 6, 8, 00, 00),
                        end: new Date(y, 6, 10, 00, 00),
                        allDay: true,
                        url: '../../Events/DRO7_8_14/'

                    },
                     {
                         title: '<strong>Senior VSR Skills Certification Test</strong>',
                         // description: 'This is a Description',
                         start: new Date(y, 6, 22, 00, 00),
                         end: new Date(y, 6, 24, 00, 00),
                         allDay: true,
                         url: '../../Events/SVSR7_22_14/'


                     },
                     {
                         title: '<strong>VSR Skills Certification Test</strong>',
                         // description: 'This is a Description',
                         start: new Date(y, 7, 12, 00, 00),
                         end: new Date(y, 7, 14, 00, 00),
                         allDay: true,
                         url: '../../Events/SVSR8_12_14/'


                     },


        ],



    });



});=======
$(document).ready(function () {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar').fullCalendar({

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            aspectratio: 1
        },
        selectable: false,
        selectHelper: true,
        select: function (start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        editable: false,





        // add event name to title attribute on mouseover
        // eventMouseover: function(event, jsEvent, view) {
        //  if (view.name !== 'agendaDay') {
        //    $(jsEvent.target).attr('title', event.title);
        //   }
        //   },


        eventClick: function (event) {
            if (event.url) {
                window.open(event.url, "", "width=520, height=345");
                return false;
            }
        },

        eventRender: function (event, element) {
            element.find('.fc-event-title').html(element.find('span.fc-event-title').text())//.append("" + event.description); 
        },






        events: [
            /*
                title: '<strong>All Day Event</strong>',
                description:'This is a Description. This will wrap around the title information... hopefully.',
                start: new Date(y, m, 1)
                
            },
            {
                title: 'Long Event',
                description:'This is a Description',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                description:'This is a Description',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
            id: 999,
                title: 'Repeating Event',
                description:'This is a Description',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            */

            //2014 Federal Holidays
             {
                 title: 'New Years Day',
                 //description: 'This is a Description',
                 start: new Date(y, 0, 1),
                 color: '#00fb0c'

             },
              {
                  title: 'Birthday of Martin Luther King, Jr.',
                  //description: 'This is a Description',
                  start: new Date(y, 0, 20),
                  color: '#00fb0c'


              },
               {
                   title: 'Washingtons Birthday',
                   //description: 'This is a Description',
                   start: new Date(y, 1, 17),
                   color: '#00fb0c'

               },
                {
                    title: 'Memorial Day',
                    //description: 'This is a Description',
                    start: new Date(y, 4, 26),
                    color: '#00fb0c'

                },
                {
                    title: 'Independence Day',
                    //description: 'This is a Description',
                    start: new Date(y, 6, 04),
                    color: '#00fb0c'


                },
                {
                    title: 'Labor Day',
                    //description: 'This is a Description',
                    start: new Date(y, 8, 01),
                    color: '#00fb0c'

                },
                 {
                     title: 'Columbus Day',
                     //description: 'This is a Description',
                     start: new Date(y, 9, 13),
                     color: '#00fb0c'

                 },
                  {
                      title: 'Veterans Day',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 11),
                      color: '#00fb0c'

                  },
                  {
                      title: 'Thanksgiving Day',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 27),
                      color: '#00fb0c'

                  },
                  {
                      title: 'Christmas Day',
                      //description: 'This is a Description',
                      start: new Date(y, 11, 25),
                      color: '#00fb0c'

                  },

                  /*{
                      title: '<strong>Challenge Training: External RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(y, 8, 2, 00, 00),
                      end: new Date(y, 8, 2, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge9_02_14/',
                      color: 'purple'



                  },

                

            {
                title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                //description: 'This is a Description',
                start: new Date(y, 5, 5, 13, 00),
                end: new Date(y, 5, 5, 14, 30),
                allDay: false,
                url: '../../Events/TMSCall/',
                color: 'red'



            },
             


                 
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 5, 26, 14, 30),
                    end: new Date(y, 5, 26, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                 {
                     title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 26, 11, 00),
                     end: new Date(y, 5, 26, 12, 00),
                     allDay: false,
                     color: '#000',
                     url: '../../Events/VSCMCall6_26_14/'

                 },

                  

                 {
                     title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 24, 14, 00),
                     end: new Date(y, 5, 24, 15, 00),
                     allDay: false,
                     color: '#ff00cc',
                     url: '../../Events/TMCall6_24_14/'

                 },
                 {
                     title: '<strong>:00-4:00 PM (ET) TM Summer Learning Event</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 24, 15, 00),
                     end: new Date(y, 5, 24, 16, 00),
                     allDay: false,
                     color: '#00e4ff',
                     url: '../../Events/TMSummer6_24_14/'

                 },
                

                   {
                       title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                       // description: 'This is a Description',
                       start: new Date(y, 9, 28, 14, 00),
                       end: new Date(y, 9, 28, 15, 00),
                       allDay: false,
                       color: '#ff00cc',
                       url: '../../Events/TMCall10_28_14/'


                   },*/
                  

        ],



    });



});>>>>>>> .r746
