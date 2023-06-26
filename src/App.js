import React from 'react';
import { Survey, Model } from 'survey-react-ui';
import "survey-core/defaultV2.min.css";
import "./index.css";
import "survey-core/defaultV2.css";
import jsPDF from "jspdf";
//import { Survey, Model } from 'survey-react';


const surveyJSON = {
      "title": "S.H.A.P.E Inventory",
      "logoPosition": "right",
      "pages": [
        {
          "name": "Personal Information",
          "elements": [
            {
              "type": "text",
              "name": "Name",
              "title": "Name:",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "Age",
              "title": "Age:",
              "isRequired": true,
              "inputType": "number",
              "min": 5,
              "max": 99
            },
            {
              "type": "text",
              "name": "Phone",
              "title": "Phone:",
              "isRequired": true,
              "inputType": "tel"
            },
            {
              "type": "text",
              "name": "Email",
              "title": "Email:",
              "isRequired": true,
              "inputType": "email"
            },
            {
              "type": "text",
              "name": "Church",
              "title": "Church:",
              "isRequired": true
            },
            {
              "type": "boolean",
              "name": "Baptized",
              "title": "Baptized:",
              "isRequired": true
            },
            {
              "type": "boolean",
              "name": "Member",
              "title": "Member:",
              "isRequired": true
            },
            {
              "type": "boolean",
              "name": "Ministry in Church",
              "title": "Ministry in Church:",
              "isRequired": true,
              "showCommentArea": true,
              "commentText": "If Yes, Please Specify ministry(s):"
            }
          ],
          "title": "PERSONAL INFORMATION"
        },
        {
          "name": "Spiritual Gifts: What I'M GIFTED TO DO",
          "elements": [
            {
              "type": "tagbox",
              "name": "Spiritual gifts I believe I have are",
              "title": "Spiritual gifts I believe I have are ",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Administration"
                },
                {
                  "value": "Item 2",
                  "text": "Apostleship"
                },
                {
                  "value": "Item 3",
                  "text": "Creative communication "
                },
                {
                  "value": "Item 4",
                  "text": "Discernment"
                },
                {
                  "value": "Item 5",
                  "text": "Encouragement"
                },
                {
                  "value": "Item 6",
                  "text": "Evangelism"
                },
                {
                  "value": "Item 7",
                  "text": "Faith"
                },
                {
                  "value": "Item 8",
                  "text": "Giving"
                },
                {
                  "value": "Item 9",
                  "text": "Healing"
                },
                {
                  "value": "Item 10",
                  "text": "Helps"
                },
                {
                  "value": "Item 11",
                  "text": "Hospitality"
                },
                {
                  "value": "Item 12",
                  "text": "Intercession"
                },
                {
                  "value": "Item 13",
                  "text": "Interpretation"
                },
                {
                  "value": "Item 14",
                  "text": "Knowledge"
                },
                {
                  "value": "Item 15",
                  "text": "Leadership"
                },
                {
                  "value": "Item 16",
                  "text": "Mercy"
                },
                {
                  "value": "Item 17",
                  "text": "Miracles"
                },
                {
                  "value": "Item 18",
                  "text": "Prophecy"
                },
                {
                  "value": "Item 19",
                  "text": "Shepherding"
                },
                {
                  "value": "Item 20",
                  "text": "Teaching"
                },
                {
                  "value": "Item 21",
                  "text": "Tongues"
                },
                {
                  "value": "Item 22",
                  "text": "Wisdom"
                }
              ],
              "maxSelectedChoices": 5
            }
          ],
          "title": "Spiritual Gifts: What I'M GIFTED TO DO",
          "description": "[Do this before filling up the Spiritual Gifts Inventory]"
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "html",
              "name": "Spiritual gifts definitions",
              "html": "<table>\n        <thead>\n        <tr>\n            <th>No.</th>\n            <th>Spiritual Gift</th>\n            <th>Contributes</th>\n            <th>Characteristics</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>1</td>\n            <td>Administration</td>\n            <td></td>\n            <td>The divine enablement to understand what makes an organisation\n                functions and the speciality to. plan and execute procedures that\n                accomplish the goals of the ministry.Able ot develop strategies or plans\n                ot reach identified goals; assist ministries to become more effective\n                and efficient; create order out of organisational chaos; manage or\n                coordinate a variety of responsibilities t o accomplish a task; organise\n                people, tasks or events</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>Apostleship</td>\n            <td></td>\n            <td>The divine ability ot start and oversee the development of new churches or ministry structures. Able to pioneer and establish new ministries or churches; adapt to different surroundings by being culturally sensitive and aware; desire to minister to unreached people in other communities or countries; have responsibilities ot oversee ministries or groups of churches; demonstrate authority and vision for the mission of the church.</td>\n        </tr>\n        <!-- Add more rows as needed -->\n        <tr>\n            <td>3</td>\n            <td>Creative Communication</td>\n            <td></td>\n            <td>The divine enablement to communicate God' truth through a variety of\n                art forms. Able to use the arts to communicate God's truth; develop and\n                use artistic skills such as drama, writing, art, music, dance, etc; use\n                variety and creativity to captivate people and cause them to consider\n                Christ's message; challenge people's perspective of God through\n                various forms of the arts; demonstrate fresh ways to express the Lord's\n                ministry and message.</td>\n        </tr>\n        <tr>\n            <td>4</td>\n            <td>Discernment</td>\n            <td></td>\n            <td>The divine enablement to distinguish between truth and error, good and\n                evil, right and wrong. Able to distinguish between truth and error,\n                good and evil, right and wrong; evaluate the spiritual or moral\n                status of a person, situation or object; recognise motivation and\n                intentions of the heart; identify deception in others.</td>\n        </tr>\n        <tr>\n            <td>5</td>\n            <td>Encouragement</td>\n            <td></td>\n            <td>The divine enablement to present truth so as to strengthen, comfort or\n                urge to action those who are discouraged or wavering in their faith.\n                Able to encourage others through the written or spoken word; use\n                examples from Scripture to illustrate a point; challenge others to\n                action; motivate others to follow through on a project, goal or\n                assignment; help others to see their potential in Christ.</td>\n        </tr>\n        <tr>\n            <td>6</td>\n            <td>Evangelism</td>\n            <td></td>\n            <td>The divine enablement to effectively communicate the gospel to\n                unbelievers so they respond in faith and move toward discipleship.\n                Able to communicate the gospel in a way that is clear, concise and\n                understandable to a variety of people with differing backgrounds and\n                interests; communicate a sense of urgency for the lost; effectively\n                communicate the gospel in a one-on-one situation; effectively\n                communicate the gospel in a group situation; communicate the gospel\n                in a culturally relevant way.</td>\n        </tr>\n        <tr>\n            <td>7</td>\n            <td>Faith</td>\n            <td></td>\n            <td>The divine enablement to act on God's promises with confidence and unwavering belief in God's ability to fulfil his purposes. Able to believe the promises of God and inspire others to do the same; act in complete confidence of God's ability to overcome obstacles; demonstrate an attitude of trust in God's will and his promises; advance the cause of Christ because they go forward when others will not; ask God for what is needed and trust him for his provision.</td>\n        </tr>\n        <tr>\n            <td>8</td>\n            <td>Giving</td>\n            <td></td>\n            <td>The divine enablement to contribute money and resources to the work of the Lord with cheerfulness and liberality.It does not ask, \"How much money do I give to God?\" but, \"How much of God's money to I keep?\" Able to manage their finances and limit their lifestyle in order to give as much of their resources as possible; support the work of ministry with sacrificial gifts to advance the Kingdom; meet tangible needs that enable spiritual growth to occur; provide resources, generously and cheerfully, trusting God for His provision; may have a special ability to make money so that they may use it to further God's work.</td>\n        </tr>\n        <tr>\n            <td>9</td>\n            <td>Healing</td>\n            <td></td>\n            <td>The divine enablement to contribute money and resources to the work of the Lord with cheerfulness and liberality.It does not ask, \"How much money do I give to God?\" but, \"How much of God's money to I keep?\" Able to manage their finances and limit their lifestyle in order to give as much of their resources as possible; support the work of ministry with sacrificial gifts to advance the Kingdom; meet tangible needs that enable spiritual growth to occur; provide resources, generously and cheerfully, trusting God for His provision; may have a special ability to make money so that they may use it to further God's work.</td>\n        </tr>\n        <tr>\n            <td>10</td>\n            <td>Helps</td>\n            <td></td>\n            <td>The divine enablement to accomplish practical and necessary tasks which free-up, support, and meet the needs of others. Able to serve behind the scenes wherever needed to support the gifts and ministries of others; seen the tangible and practical things to be done and enjoy doing them; sense God\" purpose and pleasure ni meeting everyday responsibilities; attach spiritual</td>\n        </tr>\n        <tr>\n            <td>11</td>\n            <td>Hospitality</td>\n            <td></td>\n            <td>The divine enablement to care for people by providing fellowship, food, and shelter Able to provide environment where people feel valued and cared for; meet new people and help them ot feel welcomed; create a safe and comfortable setting where relationships can develop; seek ways to connect people together meaningful relationships; set people at ease in unfamiliar surroundings.</td>\n        </tr>\n        <tr>\n            <td>12</td>\n            <td>Intercession</td>\n            <td></td>\n            <td>The divine enablement to consistently pray on behalf of and for others, seeing frequent and specific results.Able to feel compelled to earnestly pray on behalf of someone Or some cause; have a daily awareness of the spiritual battles being waged and pray; are convinced God moves in direct response to prayer; pray in response to the leading of the spirit, whether they understand ti or not; exercise authority and power for the protection of others and the equipping of them ot serve</td>\n        </tr>\n        <tr>\n            <td>13</td>\n            <td>Interpretation</td>\n            <td></td>\n            <td>The divine enablement to make known to the body of Christ the message of one who is speaking in tongues. Able to respond to a message spoken in tongues by giving an interpretation; glorify God and demonstrate his power through this miraculous manifestation; edify the body by interpreting a timely message from God; understand an unlearned language and communicate that message to hte body of Christ; are sometimes prophetic when exercising an interpretation of tongues for the church.</td>\n        </tr>\n        <tr>\n            <td>15</td>\n            <td>Encouragement</td>\n            <td></td>\n            <td>The divine enablement to present truth so as to strengthen, comfort or\n                urge to action those who are discouraged or wavering in their faith.\n                Able to encourage others through the written or spoken word; use\n                examples from Scripture to illustrate a point; challenge others to\n                action; motivate others to follow through on a project, goal or\n                assignment; help others to see their potential in Christ.</td>\n        </tr>\n        <tr>\n            <td>16</td>\n            <td>Evangelism</td>\n            <td></td>\n            <td>The divine enablement to effectively communicate the gospel to\n                unbelievers so they respond in faith and move toward discipleship.\n                Able to communicate the gospel in a way that is clear, concise and\n                understandable to a variety of people with differing backgrounds and\n                interests; communicate a sense of urgency for the lost; effectively\n                communicate the gospel in a one-on-one situation; effectively\n                communicate the gospel in a group situation; communicate the gospel\n                in a culturally relevant way.</td>\n        </tr>\n        <tr>\n            <td>17</td>\n            <td>Encouragement</td>\n            <td></td>\n            <td>The divine enablement to present truth so as to strengthen, comfort or\n                urge to action those who are discouraged or wavering in their faith.\n                Able to encourage others through the written or spoken word; use\n                examples from Scripture to illustrate a point; challenge others to\n                action; motivate others to follow through on a project, goal or\n                assignment; help others to see their potential in Christ.</td>\n        </tr>\n        <tr>\n            <td>18</td>\n            <td>Evangelism</td>\n            <td></td>\n            <td>The divine enablement to effectively communicate the gospel to\n                unbelievers, so they respond in faith and move toward discipleship.\n                Able to communicate the gospel in a way that is clear, concise and\n                understandable to a variety of people with differing backgrounds and\n                interests; communicate a sense of urgency for the lost; effectively\n                communicate the gospel in a one-on-one situation; effectively\n                communicate the gospel in a group situation; communicate the gospel\n                in a culturally relevant way.</td>\n        </tr>\n        <tr>\n            <td>19</td>\n            <td>Encouragement</td>\n            <td></td>\n            <td>The divine enablement to present truth so as to strengthen, comfort or\n                urge to action those who are discouraged or wavering in their faith.\n                Able to encourage others through the written or spoken word; use\n                examples from Scripture to illustrate a point; challenge others to\n                action; motivate others to follow through on a project, goal or\n                assignment; help others to see their potential in Christ.</td>\n        </tr>\n        <tr>\n            <td>20</td>\n            <td>Evangelism</td>\n            <td></td>\n            <td>The divine enablement to effectively communicate the gospel to\n                unbelievers so they respond in faith and move toward discipleship.\n                Able to communicate the gospel in a way that is clear, concise and\n                understandable to a variety of people with differing backgrounds and\n                interests; communicate a sense of urgency for the lost; effectively\n                communicate the gospel in a one-on-one situation; effectively\n                communicate the gospel in a group situation; communicate the gospel\n                in a culturally relevant way.</td>\n        </tr>\n        <tr>\n            <td>21</td>\n            <td>Encouragement</td>\n            <td></td>\n            <td>The divine enablement to present truth so as to strengthen, comfort or\n                urge to action those who are discouraged or wavering in their faith.\n                Able to encourage others through the written or spoken word; use\n                examples from Scripture to illustrate a point; challenge others to\n                action; motivate others to follow through on a project, goal or\n                assignment; help others to see their potential in Christ.</td>\n        </tr>\n        <tr>\n            <td>22</td>\n            <td>Evangelism</td>\n            <td></td>\n            <td>The divine enablement to effectively communicate the gospel to\n                unbelievers, so they respond in faith and move toward discipleship.\n                Able to communicate the gospel in a way that is clear, concise and\n                understandable to a variety of people with differing backgrounds and\n                interests; communicate a sense of urgency for the lost; effectively\n                communicate the gospel in a one-on-one situation; effectively\n                communicate the gospel in a group situation; communicate the gospel\n                in a culturally relevant way.</td>\n        </tr>\n        <tr>\n            <td>23</td>\n            <td>Encouragement</td>\n            <td></td>\n            <td>The divine enablement to present truth, so as to strengthen, comfort or\n                urge to action those who are discouraged or wavering in their faith.\n                Able to encourage others through the written or spoken word; use\n                examples from Scripture to illustrate a point; challenge others to\n                action; motivate others to follow through on a project, goal or\n                assignment; help others to see their potential in Christ.</td>\n        </tr>\n        </tbody>\n    </table>"
            }
          ],
          "title": "SPIRITUAL GIFT ASSESSMENT",
          "description": "Ensure that everyone have all the 22 Spiritual Gifts listed."
        },
        {
          "name": "Spiritual Gift Assessment Exercise",
          "elements": [
            {
              "type": "html",
              "name": "Spiritual Gift Assessment steps",
              "html": "<section class=\"container-4-2\">\n    <div class=\"container-4-2-heading-para\">\n    <h2 class=\"s4-2-heading\">4.2 Spiritual Gift Assessment Exercise</h2>\n    <p class=\"s4-2-paragraph\">You are about to become involved in an exciting spiritual exercise. There are 108 questions to be answered. Follow these steps</p>\n    </div>\n    <div class=\"container-4-2-heading-para-2\">\n        <h3 class=\"step-heading\">Step 1:</h3>\n        <p class=\"step-paragraph\">\n        Go through the 108 statements and circle the extent of the statement that is true in\n        your life. 3 for MUCH, 2 for SOME, 1 for LITTLE and 0 for NOT AT ALL.\n        DO NOT SCORE ACCORDING TO WHAT YOU THINK SHOULD BE TRUE\n        OR HOPE MIGHT BE TRUE IN FUTURE. BE HONEST AND SCORE ON THE BASIS OF EXPERIENCE.</p>\n        <h3 class=\"step-heading\">Step 2:</h3>\n        <p class=\"step-paragraph\">\n        After you have completed all the statements, transfer your score on to the ANSWER SHEET and follow the instructions therein.</p>\n        <h3 class=\"step-heading\">Step 3:</h3>\n        <p class=\"step-paragraph\">\n            List the three Spiritual Gifts that have the highest score in the PRIMARY box and those with the next three highest score in the SECONDARY box.</p>\n        <h3 class=\"step-heading\">Step 4:</h3>\n        <p class=\"step-paragraph\">\n        Share with the rest of your members your PRIMARY and SECONDARY lists, explaining whether you tend to agree or disagree with the findings.</p>\n        <h3 class=\"step-heading\">Step 5:</h3>\n        <p class=\"step-paragraph\">Allow the other members to affirm your sharing. Often, you will not be aware of what others have appreciated about you or noticed about your abilities in ministry situations. You may also share with other church members outside your Care Group for more affirmation.</p>\n        <h3 class=\"step-heading\">Step 6:</h3>\n        <p class=\"step-paragraph\">\n        Review the List of Ministry Opportunities ni Calvary Baptist Church (Annex A) and express your interest to serve in the relevant ministry team to exercise your Spiritual Gifts).</p>\n\n    </div>\n</section>\n<section class=\"remarks-container\">\n    <h3 class=\"remarks-heading\">Remarks:</h3>\n    <p class=\"remarks-paragraph\">.1 Healing, Interpretation, Miracles and Tongues are not included in the assessment because their presence in the life ofa believer would be obvious and self-evident.</p>\n        <p> 2. Healing, Interpretation, Miracles and Tongues tend to divide the Body of Christ when the issues are not adequately addressed from a balanced perspective. For the sake of harmony, they are thus excluded in this assessment questionnaire. They are best understood with further studies.</p>\n</section>"
            }
          ],
          "title": "Spiritual Gift Assessment Exercise",
          "description": "Please read the description carefully"
        },
        {
          "name": "SPIRITUAL GIFT ASSESSMENT QUESTIONNAIRE",
          "elements": [
            {
              "type": "rating",
              "name": "1",
              "title": "I have a desire to speak direct messages from God that edifies, exhorts or comforts others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "2",
              "title": "I have enjoyed relating to a certain group of people over a long period of time, sharing personally in their successes and failures.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "3",
              "title": "People have told me that I have helped them learn biblical truth in meaningful ways.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "4",
              "title": "I have applied spiritual truth effectively to situations in my own life",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "5",
              "title": "Others have told me I have helped them distinguish key and important facts of Scripture.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "6",
              "title": "I enjoyed challenging people's perspective of God by using various forms of art.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "7",
              "title": "Others in the church have noted that I have been able to see through phoniness before it was evident to other people.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "8",
              "title": "I find I manage money well in order to give liberally to the Lord's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "9",
              "title": "I have assisted Christian leaders to relieve them for their essential job.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "10",
              "title": "I have a desire to work with those who have physical or mental problems, to alleviate their suffering.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "11",
              "title": "I like to start churches in places where they do not presently exist.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "12",
              "title": "I have led others to a decision for salvation through faith in Christ",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "13",
              "title": "My home is always open to people passing through who need a place to stay.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "14",
              "title": "When in a group, I am the one others look to for vision and direction",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "15",
              "title": "When I speak, people seem to listen and agree",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "16",
              "title": "When a group I am in is lacking organisation, I tend to step in to fill the gap.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "17",
              "title": "I tend to see potential in people",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "18",
              "title": "I enjoyed praying for long times and receive leadings as to what God wants me to pray for",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "19",
              "title": "Through God I have revealed specific things that will happen in the future.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "20",
              "title": "I have enjoyed assuming the responsibility. for the spiritual wel being of a particular group o f Christians.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "21",
              "title": "I feel I can explain the New Testament teaching about the health and ministry of the Body of Christ in a relevant way.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "22",
              "title": "I can intuitively arrive at solutions to fairly complicated problems.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "23",
              "title": "I have had insights of spiritual truth that others have said helped bring them closer to God",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "24",
              "title": "I enjoyed developing and using my artistic skills (art, drama, music, photography, etc.)",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "25",
              "title": "I can \"see\" the Spirit of God resting on certain people from time to time.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "26",
              "title": "My giving records show that I give considerably more than 10 percent of my income to the Lord's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "27",
              "title": "Other people have told me that I have helped them become effective in their ministries.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "28",
              "title": "I have cared for others when they have had material or physical needs.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "29",
              "title": "I am attracted to the idea of serving in another country or ethnic community.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "30",
              "title": "I have shared joyfully how Christ has brought me to Himself in a way that is meaningful to nonbelievers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "31",
              "title": "I enjoy taking charge of church suppers or social events.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "32",
              "title": "I have believed God for the impossible and seen it happen in a tangible way.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "33",
              "title": "Other Christians have followed my leadership because they believed in me.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "34",
              "title": "I enjoy handling the details of organising ideas, people, resources and time for more effective ministry.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "35",
              "title": "I enjoyed reassuring and strengthening those who are discouraged.",
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "36",
              "title": "When I hear a prayer request, I pray for that need for several days at least.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "37",
              "title": "People have told me that I have communicated timely and urgent messages that must have come directly from the Lord.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "38",
              "title": "I feel unafraid of giving spiritual guidance and direction ni a group of Christians.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "39",
              "title": "I can devote considerable time to learning new biblical truths in order to communicate them to others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "40",
              "title": "When a person has a problem I can frequently guide him or her to the best biblical solution.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "41",
              "title": "Through study or experience, I have discerned major strategies or techniques God seems to use in furthering His kingdom.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "42",
              "title": "I helped people understand themselves, their relationships, and God better through artistic expression.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "43",
              "title": "I can tell with a fairly high degree of assurance when a person is afflicted by an evil spirit.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "44",
              "title": "When I am moved by an appeal to give to God's work, I usually can find the money I need to do it.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "45",
              "title": "I have enjoyed doing routine tasks that have led to more effective ministry by others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "46",
              "title": "I enjoy visiting in hospitals and/or retirement homes, and feel I do well in such a ministry.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "47",
              "title": "I am willing to take an active part in starting a new church.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "48",
              "title": "Non-Christians Have noted that they feel comfortable when they are around me, and that I have a positive effect on them towards developing a faith in Christ.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "49",
              "title": "When people come to our home, they indicate that they \"feel at home\" with us.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "50",
              "title": "Other people have told me that I had faith to accomplish what seemed impossible to them.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "51",
              "title": "When I set goals, others seem to accept them readily.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "52",
              "title": "I have been able to make effective and efficient plans for accomplishing the goals of a group.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "53",
              "title": "I give hope to others by directing them to the promises of God",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "54",
              "title": "Intercessory prayer is one of my favorite ways of spending time with God.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "55",
              "title": "I sometimes have a strong sense of what God wants to say to people in response to particular situations.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "56",
              "title": "I have helped fellow believers by guiding them to relevant portions of the Bible and praying with them.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "57",
              "title": "I feel I can communicate biblical truth to others and see resulting changes in knowledge, attitudes, values or conduct.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "58",
              "title": "Some people indicate that I have perceived and applied biblical truth to the specific needs of fellow believers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "59",
              "title": "I study and read quite a bit in order to learn new biblical truths.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "60",
              "title": "I like finding new and fresh ways of communicating God's truth.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "61",
              "title": "I can recognize whether a person's teaching is from God, from Satan, of human origin.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "62",
              "title": "I am so confident that God will meet my needs that I give to Him sacrificially and consistently.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "63",
              "title": "When I do things behind the scenes and others are helped, I am joyful.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "64",
              "title": "People call on me to help those who are less fortunate.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "65",
              "title": "I would be willing to leave comfortable surroundings if it would enable me to share Christ with more people.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "66",
              "title": "I get frustrated when others don't seem to share their faith with unbelievers as much as I do.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "67",
              "title": "Others have mentioned to me that I am a very hospitable person.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "68",
              "title": "There have been times when I have felt sure I knew God's specific will for the future growth of His work, even when others have not been so sure.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "69",
              "title": "When I join a group, others seem to back of and expect me to take the leadership.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "70",
              "title": "I am able to give directions to others without using persuasion to get them to accomplish tasks.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "71",
              "title": "I reassure those who need to take courageous action in their faith, family or life.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "72",
              "title": "Others have told me that my prayers for them have been answered intangible ways.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "73",
              "title": "I sometimes feel that I know exactly what God wants to do in ministry at a specific point in time.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "74",
              "title": "People have told me that I have helped them be restored to the Christian community.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "75",
              "title": "Studying the Bible and sharing my insights with others is very satisfying for me",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "76",
              "title": "I have felt an unusual presence of God and personal confidence when important decisions needed to be made.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "77",
              "title": "I have the ability to discover new truths for myself through reading or observing situations firsthand.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "78",
              "title": "I apply various artistic expressions to communicate God's truth.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "79",
              "title": "I can tell whether a person is speaking in tongues is genuine.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "80",
              "title": "I have been willing to maintain a lower standard of living in order to benefit God's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "81",
              "title": "When I serve the Lord, I really don't care who gets the credit.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "82",
              "title": "I would enjoy spending time with a lonely, shut-in person or someone in prison.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "83",
              "title": "More than most, I have had a strong desire to see peoples of other nations won to the Lord.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "84",
              "title": "I am attracted to nonbelievers because of my desire to win them to Christ.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "85",
              "title": "I have desired to make my home available to those in the Lord's service whenever needed.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "86",
              "title": "Others have told me that I am a person of unusual vision, and I agree.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "87",
              "title": "When I am in charge, things seem to run smoothly.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "88",
              "title": "I have enjoyed bearing the responsibility for the success of a particular task within my church.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "89",
              "title": "I strengthen those who are wavering in their faith.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "90",
              "title": "When I pray, God frequently speaks to me, and I recognise His voice.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "91",
              "title": "I feel compelled to expose sin wherever I see it and to challenge people to repentance.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "92",
              "title": "I enjoy patiently but firmly nurturing others in their development as believers",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "93",
              "title": "I enjoy explaining things ot people so that they can grow spiritually and personally.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "94",
              "title": "I have insights into how to solve problems that others do not see.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "95",
              "title": "I confidently share my knowledge and insight with others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "96",
              "title": "I regularly need to get alone to reflect and develop my imagination.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "97",
              "title": "I can sense when demonic forces are at work in a person or situation.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "98",
              "title": "I believe I have been given an abundance of resources so that I may gave more to the Lord's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "99",
              "title": "I readily and happily use my natural or learned skills to help wherever needed.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "100",
              "title": "I enjoy doing practical things for others who are in need.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "101",
              "title": "I am able to orchestrate or oversee several church ministries",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "102",
              "title": "I seek opportunities to talk about spiritual matters with unbelievers",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "103",
              "title": "I can make people feel at ease even in unfamiliar surroundings.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "104",
              "title": "I can move forward in-spite of opposition or lack of support when I sense God's blessings in an undertaking.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "105",
              "title": "I figure out where we need to go and help others to get there.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "106",
              "title": "I can visualise a coming event, anticipate potential problems and develop contingency plans.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "107",
              "title": "I am able to challenge or rebuke others in order to foster spiritual growth",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "rating",
              "name": "108",
              "title": "I often see specific results in direct response to my prayers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3
            },
            {
              "type": "html",
              "name": "share",
              "title": "I often see specific results in direct response to my prayers.",
              "html": "\n<h3>STEP 4: SHARE YOUR DISCOVERY</h3>\n<p>Share with the rest of your members your PRIMARY and SECONDARY lists, explaining whether you tend to agree or disagree with the findings.</p>\n<h3>STEP 5: AFFIRMATION OF YOUR SPIRITUAL GIFTS</h3>\n<p>Allow the other members to affirm your sharing. Often, you will not be aware of what others have appreciated about you or noticed about your abilities in ministry situations. You may also share with other church members outside your Care Group for more affirmation.</p>"
            }
          ],
          "title": "SPIRITUAL GIFT ASSESSMENT QUESTIONNAIRE",
          "description": "For each statement, circle the score that reflects the extent of its truth in your life. 3 for MUCH, 2 for SOME, 1 for LITTLE and 0 for NOT AT ALL"
        }
      ]
    }
;


const onSurveyComplete = (model) => {
      console.log("Survey results: " + JSON.stringify(model.data));
      const answers = model.data;
      const Prophecy = answers['1'] + answers['19'] + answers['37'] + answers['55'] + answers['73'] + answers['91'];
      const Shepherding = answers['2'] + answers['20'] + answers['38'] + answers['56'] + answers['74'] + answers['92'];
      const Teaching = answers['3'] + answers['21'] + answers['39'] + answers['57'] + answers['75'] + answers['93'];
      const Wisdom = answers['4'] + answers['22'] + answers['40'] + answers['58'] + answers['76'] + answers['94'];
      const Knowledge = answers['5'] + answers['23'] + answers['41'] + answers['59'] + answers['77'] + answers['95'];
      const Creative_Comm = answers['6'] + answers['24'] + answers['42'] + answers['60'] + answers['78'] + answers['96'];
      const Discernment = answers['7'] + answers['25'] + answers['43'] + answers['61'] + answers['79'] + answers['97'];

      const Giving = answers['8'] + answers['26'] + answers['44'] + answers['62'] + answers['80'] + answers['98'];
      const Helps = answers['9'] + answers['27'] + answers['45'] + answers['63'] + answers['81'] + answers['99'];
      const Mercy = answers['10'] + answers['28'] + answers['46'] + answers['64'] + answers['82'] + answers['100'];
      const Apostleship = answers['11'] + answers['29'] + answers['47'] + answers['65'] + answers['83'] + answers['101'];
      const Evangelism = answers['12'] + answers['30'] + answers['48'] + answers['66'] + answers['84'] + answers['102'];
      const Hospitality = answers['13'] + answers['31'] + answers['49'] + answers['67'] + answers['85'] + answers['103'];
      const Faith = answers['14'] + answers['32'] + answers['50'] + answers['68'] + answers['86'] + answers['104'];
      const Leadership = answers['15'] + answers['33'] + answers['51'] + answers['69'] + answers['87'] + answers['105'];
      const Administration = answers['16'] + answers['34'] + answers['52'] + answers['70'] + answers['88'] + answers['106'];
      const Encouragement = answers['17'] + answers['35'] + answers['53'] + answers['71'] + answers['89'] + answers['107'];
      const Intercession = answers['18'] + answers['36'] + answers['54'] + answers['72'] + answers['90'] + answers['108'];
      const doc = new jsPDF({format: [210, 400]});
      doc.setFontSize(16);
      doc.text('Personal Information & Spiritual Gifts:', 20, 20);
      doc.setFontSize(12);
      doc.text(`Name: ${answers['Name']}`, 20, 40);
      doc.text(`Age: ${answers['Age']}`, 20, 50);
      doc.text(`Phone: ${answers['Phone']}`, 20, 60);
      doc.text(`Email: ${answers['Email']}`, 20, 70);
      doc.text(`Church: ${answers['Church']}`, 20, 80);
      doc.text(`Baptized: ${answers['Baptized']}`, 20, 90);
      doc.text(`Member: ${answers['Member']}`, 20, 100);
      doc.text(`Ministry in Church: ${answers['Ministry in Church']}`, 20, 110);
      if (answers['Ministry in Church'] !== true) {
        return;
      }
      doc.text(`Ministry(s): ${answers['Ministry in Church-Comment']}`, 20, 120);
      doc.setFont("bold");
      doc.text(`Spiritual Gifts I believe I have are:`, 20, 130);
      let yPos = 140;
      surveyJSON.choices?.forEach((item) => {
        doc.text(item.choices, 10, yPos);
        yPos += 10;
      });
      doc.text('Spiritual Gift Assessment Results:', 20, 150);
      doc.text(`Prophecy: 1, 19, 37, 55, 73, 91: ${Prophecy}`, 20, 160);
      doc.text(`Shepherding: 2, 20, 38, 56, 74, 92: ${Shepherding}`, 20, 170);
      doc.text(`Teaching: 3, 21, 39, 57, 75, 93: ${Teaching}`, 20, 180);
      doc.text(`Wisdom 4, 22, 40, 58, 76, 94: ${Wisdom}`, 20, 190);
      doc.text(`Knowledge: 5, 23, 41, 59, 77, 95: ${Knowledge}`, 20, 200);
      doc.text(`Creative_Comm: 6, 24, 42, 60, 78, 96: ${Creative_Comm}`, 20, 210);
      doc.text(`Discernment: 7, 25, 43, 61, 79, 97: ${Discernment}`, 20, 220);
      doc.text(`Giving: 8, 26, 44, 62, 80, 98: ${Giving}`, 20, 230);
      doc.text(`Helps: 9, 27, 45, 63, 81, 99: ${Helps}`, 20, 240);
      doc.text(`Mercy: 10, 28, 46, 64, 82, 100: ${Mercy}`, 20, 250);
      doc.text(`Apostleship: 11, 29, 47, 65, 83, 101: ${Apostleship}`, 20, 260);
      doc.text(`Evangelism: 12, 30, 48, 66, 84, 102: ${Evangelism}`, 20, 270);
      doc.text(`Hospitality: 13, 31, 49, 67, 85, 103: ${Hospitality}`, 20, 280);
      doc.text(`Faith: 14, 32, 50, 68, 86, 104: ${Faith}`, 20, 290);
      doc.text(`Leadership 15, 33, 51, 69, 87, 105: ${Leadership}`, 20, 300);
      doc.text(`Administration 16, 34, 52, 70, 88, 106: ${Administration}`, 20, 310);
      doc.text(`Encouragement: 17, 35, 53, 71, 89, 107: ${Encouragement}`, 20, 320);
      doc.text(`Intercession: 18, 36, 54, 72, 90, 108: ${Intercession}`, 20, 330);
      const gifts = [
        {name: 'Prophecy', score: Prophecy},
        {name: 'Shepherding', score: Shepherding},
        {name: 'Teaching', score: Teaching},
        {name: 'Wisdom', score: Wisdom},
        {name: 'Knowledge', score: Knowledge},
        {name: 'Creative_Comm', score: Creative_Comm},
        {name: 'Discernment', score: Discernment},
        {name: 'Giving', score: Giving},
        {name: 'Helps', score: Helps},
        {name: 'Mercy', score: Mercy},
        {name: 'Apostleship', score: Apostleship},
        {name: 'Evangelism', score: Evangelism},
        {name: 'Hospitality', score: Hospitality},
        {name: 'Faith', score: Faith},
        {name: 'Leadership', score: Leadership},
        {name: 'Administration', score: Administration},
        {name: 'Encouragement', score: Encouragement},
        {name: 'Intercession', score: Intercession},
      ];
      gifts.sort((a, b) => b.score - a.score);
      const primaryGifts = gifts.slice(0, 3);
      const secondaryGifts = gifts.slice(3, 6);
      doc.setFontSize(14);
      doc.text('Primary Gifts:', 20, 350);
      primaryGifts.forEach((gift, index) => {
        doc.text(`${index + 1}. ${gift.name}: ${gift.score}`, 20, 360 + index * 10);
      });
      doc.text('Secondary Gifts:', 20, 390);
      secondaryGifts.forEach((gift, index) => {
        doc.text(`${index + 4}. ${gift.name}: ${gift.score}`, 20, 400 + index * 10);
      });
      doc.save('Spiritual_Gift_Assessment_Results.pdf');
    }
  ;

  function App() {
    const model = new Model(surveyJSON);
    model.onComplete.add(onSurveyComplete);
    return <Survey model={model}></Survey>;
  }
export default App;