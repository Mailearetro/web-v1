interface Contact {name:string,lastSnippet:string,badge:string[],time:string,profile:string , provider:string,category:string}
export const contacts: Contact[] =  
    [{
        name:"John Doe",
        lastSnippet:"Yes, you can ask me anything!",
        badge:["important","spam","scheduled"],
        time:"2 months ago",
        profile:"https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"gmail",
        category:"Inbox"
    },
    {
        name:"Jane Smith",
        lastSnippet:"I'll send the report tomorrow.",
        badge:["work"],
        time:"1 day ago",
        profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"outlook",
        category:"Inbox"
    },
    {
        name:"Mike Johnson",
        lastSnippet:"Let's catch up this weekend!",
        badge:["personal"],
        time:"3 hours ago",
        profile:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"gmail",
        category:"Inbox"
    },
    {
        name:"Emily Brown",
        lastSnippet:"Don't forget about the meeting at 3 PM.",
        badge:["work", "important"],
        time:"5 minutes ago",
        profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"outlook",
        category:"Important"
    },
    {
        name:"Alex Wilson",
        lastSnippet:"I've sent the invoice. Please check.",
        badge:["work", "finance"],
        time:"2 days ago",
        profile:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"gmail",
        category:"Inbox"
    },
    {
        name:"Sarah Lee",
        lastSnippet:"Happy birthday! Have a great day!",
        badge:["personal", "celebration"],
        time:"1 week ago",
        profile:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"outlook",
        category:"Inbox"
    },
    {
        name:"David Chen",
        lastSnippet:"Can you review the code changes?",
        badge:["work", "urgent"],
        time:"4 hours ago",
        profile:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"gmail",
        category:"Starred"
    },
    {
        name:"Lisa Taylor",
        lastSnippet:"The project deadline has been extended.",
        badge:["work", "announcement"],
        time:"1 day ago",
        profile:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"outlook",
        category:"Inbox"
    },
    {
        name:"Tom Harris",
        lastSnippet:"I've shared the presentation slides.",
        badge:["work"],
        time:"6 hours ago",
        profile:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
         provider:"gmail",
        category:"Inbox"
    },
    {
        name:"Emma Wilson",
        lastSnippet:"Let's plan our vacation next month!",
        badge:["personal", "travel"],
        time:"3 days ago",
        profile:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
        provider:"outlook",
        category:"Starred"
    }
]

interface Message {
    sender: string;
    time: string;
    subject: string;
    msg: string;
    contentType: string;
}

interface Thread extends Array<Message> {}

export const threads: Thread[] = [
  [
    {sender: "me", time: "5 min ago", subject: "Re: Welcome to our platform", msg: "Thank you for the warm welcome! I'm looking forward to exploring the platform.", contentType: "plain"},
    {sender: "John Doe", time: "1 min ago", subject: "Welcome to our platform", msg: "Hello and welcome! We're excited to have you on board. <br><br>Here are some quick links to get you started:<br><ul><li><a href='#'>Getting Started Guide</a></li><li><a href='#'>FAQ</a></li><li><a href='#'>Support Center</a></li></ul>", contentType: "html"},
    {sender: "me", time: "5 min ago", subject: "Re: Welcome to our platform", msg: "Thank you for the warm welcome! I'm looking forward to exploring the platform.", contentType: "plain"},
    {sender: "me", time: "5 min ago", subject: "Re: Welcome to our platform", msg: "Thank you for the warm welcome! I'm looking forward to exploring the platform.", contentType: "plain"},
    {sender: "John Doe", time: "1 min ago", subject: "Welcome to our platform", msg: "Hello and welcome! We're excited to have you on board. <br><br>Here are some quick links to get you started:<br><ul><li><a href='#'>Getting Started Guide</a></li><li><a href='#'>FAQ</a></li><li><a href='#'>Support Center</a></li></ul>", contentType: "html"},
    {sender: "me", time: "5 min ago", subject: "Re: Welcome to our platform", msg: "Thank you for the warm welcome! I'm looking forward to exploring the platform.", contentType: "plain"}
  ],
  [
    {sender: "Jane Smith", time: "2 hours ago", subject: "Project Milestone Achieved", msg: "Great news, team! We've hit our first major milestone. <br><br>Here's a summary of our progress:<br><table border='1'><tr><th>Task</th><th>Status</th></tr><tr><td>Design</td><td>Complete</td></tr><tr><td>Development</td><td>In Progress</td></tr><tr><td>Testing</td><td>Pending</td></tr></table>", contentType: "html"},
    {sender: "me", time: "1 hour ago", subject: "Re: Project Milestone Achieved", msg: "Fantastic work, Jane! This is a significant achievement. Let's schedule a team celebration soon.", contentType: "plain"},
    {sender: "me", time: "1 hour ago", subject: "fuck off", msg: "Fantastic work, Jane! This is a significant achievement. Let's schedule a team celebration soon.", contentType: "plain"}
  ],
  [
    {sender: "Mike Johnson", time: "1 day ago", subject: "Upcoming Team Building Event", msg: "Hey everyone,<br><br>Don't forget about our team building event next week! We'll be doing an escape room challenge.<br><br>Please fill out this <a href='#'>preference form</a> to help us organize the teams.", contentType: "html"},
    {sender: "me", time: "23 hours ago", subject: "Re: Upcoming Team Building Event", msg: "Sounds exciting! I've filled out the form. Looking forward to the challenge!", contentType: "plain"}
  ],
  [
    {sender: "Emily Brown", time: "3 days ago", subject: "Quarterly Report Draft", msg: "Hi team,<br><br>I've attached the draft of our quarterly report. Please review and provide feedback by Friday.<br><br>Key highlights:<br><ul><li>Revenue up 15%</li><li>Customer satisfaction at 92%</li><li>New product launch successful</li></ul>", contentType: "html"},
    {sender: "me", time: "3 days ago", subject: "Re: Quarterly Report Draft", msg: "Thanks, Emily. I'll review the draft and send my comments by Thursday.", contentType: "plain"}
  ],
  [
    {sender: "Alex Wilson", time: "1 week ago", subject: "New Office Layout", msg: "Hello all,<br><br>We're considering a new office layout. Please vote on your preferred option:<br><br><a href='#'>Option A: Open Plan</a><br><a href='#'>Option B: Mixed Use</a><br><a href='#'>Option C: Private Offices</a>", contentType: "html"},
    {sender: "me", time: "6 days ago", subject: "Re: New Office Layout", msg: "I've voted for Option B. I think a mix of open and private spaces would work best for our team.", contentType: "plain"}
  ],
  [
    {sender: "Sarah Lee", time: "2 weeks ago", subject: "Holiday Party Planning", msg: "It's time to start planning our annual holiday party!<br><br>Please add your ideas to this <a href='#'>shared document</a>.<br><br>Current suggestions:<br><ul><li>Karaoke night</li><li>Charity gala</li><li>Outdoor adventure</li></ul>", contentType: "html"},
    {sender: "me", time: "13 days ago", subject: "Re: Holiday Party Planning", msg: "Great initiative, Sarah! I've added a few ideas to the document. How about a masquerade ball?", contentType: "plain"}
  ],
  [
    {sender: "David Chen", time: "3 weeks ago", subject: "Code Review Request", msg: "Hi team,<br><br>I've pushed some updates to our main repository. Could someone please review the changes?<br><br>Key updates:<br><ul><li>Improved error handling</li><li>Optimized database queries</li><li>Added unit tests</li></ul><br>You can find the pull request <a href='#'>here</a>.", contentType: "html"},
    {sender: "me", time: "20 days ago", subject: "Re: Code Review Request", msg: "I'll take a look at it, David. Thanks for the detailed summary of changes.", contentType: "plain"}
  ],
  [
    {sender: "Lisa Taylor", time: "1 month ago", subject: "Customer Feedback Survey Results", msg: "Team,<br><br>The results from our latest customer feedback survey are in. Here's a quick overview:<br><br><img src='https://via.placeholder.com/400x200' alt='Survey Results Chart'><br><br>Full report available <a href='#'>here</a>.", contentType: "html"},
    {sender: "me", time: "29 days ago", subject: "Re: Customer Feedback Survey Results", msg: "Thanks for sharing, Lisa. The results look promising. Let's discuss how we can address the areas for improvement in our next meeting.", contentType: "plain"}
  ],
  [
    {sender: "Tom Harris", time: "5 weeks ago", subject: "New Product Launch Timeline", msg: "Hello everyone,<br><br>Here's our updated product launch timeline:<br><br><table border='1'><tr><th>Phase</th><th>Start Date</th><th>End Date</th></tr><tr><td>Beta Testing</td><td>June 1</td><td>June 15</td></tr><tr><td>Marketing Campaign</td><td>June 16</td><td>July 15</td></tr><tr><td>Official Launch</td><td>July 16</td><td>July 16</td></tr></table><br>Please ensure all tasks are on track.", contentType: "html"},
    {sender: "me", time: "34 days ago", subject: "Re: New Product Launch Timeline", msg: "Thanks for the update, Tom. My team is on schedule with the beta testing preparations.", contentType: "plain"}
  ],
  [
    {sender: "Emma Wilson", time: "2 months ago", subject: "Company Picnic RSVP", msg: "Hi all,<br><br>Don't forget to RSVP for our annual company picnic!<br><br><a href='#'>Click here to RSVP</a><br><br>Event details:<br><ul><li>Date: August 15</li><li>Time: 11 AM - 4 PM</li><li>Location: Sunset Park</li></ul>Hope to see you all there!", contentType: "html"},
    {sender: "me", time: "7 weeks ago", subject: "Re: Company Picnic RSVP", msg: "Thanks for the reminder, Emma. I've submitted my RSVP. Looking forward to the event!", contentType: "plain"}
  ]
];

// ... rest of the existing code ...


export const user = {name:"Pranjal",picture:"https://assets.aceternity.com/manu.png"}