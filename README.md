## DailyScribe

DailyScribe is a simple Node.js and Express.js-based note-taking web application that allows users to create, view, and manage short entries called *scribes*. It uses EJS for templating and stores data temporarily in memory.



## 🚀 Features

 🏠 Home page to view all scribes
 ➕ Create new scribe with a title, description, and date
 🖋️ Edit existing scribes
 👀 View individual scribes
 🎨 Styled with custom CSS



## 🛠️ Tech Stack

 **Backend:** Node.js, Express.js
 **Templating Engine:** EJS
 **UUID:** For unique scribe IDs
 **Frontend:** HTML, CSS, JAVASCRIPT



## 📁 Folder Structure


DailyScribe/
│
├── public/                # Static CSS files
│   ├── edit.css
│   ├── show.css
│   └── style.css
│
├── views/                # EJS templates
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
│
├── index.js              # Main server file
├── package.json
├── package-lock.json
└── README.md



## 🧪 How to Run

1. **Clone the repository**
git clone https://github.com/himanshusssingh/DailyScribe.git
cd DailyScribe


2. **Install dependencies**

bash
npm install


3. **Run the application**

bash
node index.js


4. **Visit in browser**

http://localhost:8080




## ✅ Future Improvements

- Add database support (MongoDB or PostgreSQL)
- Implement authentication
- Add ability to delete scribes



## 📄 License

This project is licensed under the [MIT License](LICENSE).



## 🙌 Contributing

Feel free to fork the repo, open issues, or submit pull requests!



## ✨ Author

Created with 💻 by [Himanshu Singh](https://github.com/himanshusingh)
