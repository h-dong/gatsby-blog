import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import Bookmark from "../components/Bookmark";
import BookCoverEssentialism from "../assets/books/cover_essentialism.jpg";
import BookCoverInnovatorsDilemma from "../assets/books/cover_innovators_dilemma.jpg";
import BookCoverRichDadPoorDad from "../assets/books/cover_rich_dad_poor_dad.jpg";
import BookCoverSelfishGene from "../assets/books/cover_selfish_gene.jpg";
import BookCoverGettingThingsDone from "../assets/books/cover_getting_things_done.jpg";
import BookCoverSapiens from "../assets/books/cover_sapiens.jpg";
import BookCoverLeadersEatLast from "../assets/books/cover_leaders_eat_last.jpg";
import BookCoverAlgorithmsToLiveBy from "../assets/books/cover_algorithms_to_live_by.jpg";
import BookCoverIntelligentInvestor from "../assets/books/cover_intelligent_investor.jpg";
import BookCoverTreasureIslands from "../assets/books/cover_treasure_islands.jpg";
import BookCoverLeanStartup from "../assets/books/cover_lean_startup.jpg";
import BookCoverShapeUp from "../assets/books/cover_shape_up.png";
import BookCoverCleanCoder from "../assets/books/cover_clean_coder.jpg";

const bookCategories = [
    {
        name: "Productivity",
        books: [
            {
                title: "Essentialism",
                subtitle: "The Disciplined Pursuit of Less",
                description:
                    "Focus is key to achieving our goals in life, especially given how much distractions and noises around us today. This book is essential for learning about how to stay focused. Before reading this book, I took pride in multitasking on goals and objectives. Then this book taught me how inefficient I was working, and together with some other concepts I picked up later, I now only allow myself to work on one main side project at a time.",
                link: "https://amzn.to/3efTWOX",
                imgsrc: BookCoverEssentialism,
            },
            {
                title: "Getting Things Done",
                subtitle: "The Art of Stress-Free Productivity",
                description:
                    "This is one of the oldest books I have read on this list. I bought this book more than ten years ago, back when I was in University. Now I have compared it to other books out there, and I don't think it is the perfect way of managing tasks by any means. However, even today, I still find myself going back to the techniques recommended by this book. It has undoubtedly affected and changed my behaviour in a lot of positive ways.",
                link: "https://amzn.to/30WuPNm",
                imgsrc: BookCoverGettingThingsDone,
            },
            {
                title: "Algorithms To Live By",
                subtitle: "",
                description:
                    "If you code or want to learn how to code, then you should at least add this book to your reading list. It was fascinating to witness everyday life questions turned into algorithmic problems. I feel so stupid never to think to apply this in my life before. Computer Science has already solved many many difficult issues, especially around how to make effective decisions without all the data. Which are very useful to apply to everyday life problems, it would be a real shame not to utilise this technique in life.",
                link: "https://amzn.to/3ei0AUE",
                imgsrc: BookCoverAlgorithmsToLiveBy,
            },
        ],
    },
    {
        name: "Finance",
        books: [
            {
                title: "Rich Dad Poor Dad",
                subtitle:
                    "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
                description:
                    "If there is one book that you should read in finance is this one. I was lucky to be able to have some money discussion with my parents at a younger age, so I always considered myself as financially aware. After reading this book, I was pretty shocked about how little I knew. There is knowing the money basics, and then there is knowing how to build wealth. I wouldn't use this book as a guide to building wealth, but the ways it teaches to think about money is very insightful.",
                link: "https://amzn.to/2YcLlGW",
                imgsrc: BookCoverRichDadPoorDad,
            },
            {
                title: "The Intelligent Investor",
                subtitle:
                    "The Definitive Book on Value Investing. A Book of Practical Counsel",
                description:
                    "This book is not for the faint-hearted, as it is probably the driest (and longest) book on this list. But this is regarded as one of the, if not the best, investment books out there. I read this when I was just getting started with an investment, and it was difficult for me to understand everything due it requiring some existing knowledge. However, don't let this put you off because even on the first pass, I was able to pick up some useful investment tips.",
                link: "https://amzn.to/3ea3jzw",
                imgsrc: BookCoverIntelligentInvestor,
            },
            {
                title: "Treasure Islands",
                subtitle:
                    "Uncovering the Damage of Offshore Banking and Tax Havens",
                description:
                    "Ever wonder why how some companies and rich people pay less tax than they should? This book talks about just that. The reason why I listed it here is because everyone should understand taxes are one of the biggest road blockers to wealth building. I suggest this book because I think it is useful to see how international companies and rich people are doing when people like us pay more tax in terms of percentages. Even if there is nothing you can do about, but knowing is still a valuable thing.",
                link: "https://amzn.to/3hIyEvd",
                imgsrc: BookCoverTreasureIslands,
            },
        ],
    },
    {
        name: "Business",
        books: [
            {
                title: "The Innovator's Dilemma",
                subtitle:
                    "The Revolutionary Book that Will Change the Way You Do Business",
                description:
                    "There are a lot of examples of large companies been disrupted by startups. Still, I never understood why these companies could be overtaken by competitors that are a tiny % of their size. This book offered me a plausible explanation of why companies find it so challenging to be the one that disrupts itself. This is a fascinating book, and you can map a lot of the behaviours discussed in the book on to companies you work for or with.",
                link: "https://amzn.to/30UCgo5",
                imgsrc: BookCoverInnovatorsDilemma,
            },
            {
                title: "Leaders Eat Last",
                subtitle: "Why Some Teams Pull Together and Others Don't",
                description:
                    "This book isn't the best work of Simon Sinek in terms of writing, but it did teach me a valuable lesson about leadership. For many people, once they get to a point in their career, moving to management is the only way to increase their pay. Many are there for the money, not because they want to or is qualified to be in those positions. This book can be simplified to lead by example, earn people's trust and build a strong team. If you ever want to lead a team in the future, I recommend this book as food for thought.",
                link: "https://amzn.to/37GPVjR",
                imgsrc: BookCoverLeadersEatLast,
            },
            {
                title: "The Lean Startup",
                subtitle:
                    "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
                description:
                    "The chances are you might have already read this book because almost every company I worked for or with talks about MVP (Minimal Viable Product) and Scrum. I decided to list it anyway because I still struggle to follow its advice today. The recommendations are easy to understand, but hard to follow in practice. It takes courage to put non-finished work in front of customers. There could be a lot of negative feedback and could even ruin your reputation. Not to mention the temptation of improving one more thing.",
                link: "https://amzn.to/2N8dUir",
                imgsrc: BookCoverLeanStartup,
            },
            {
                title: "Shape Up",
                subtitle: "Stop Running in Circles and Ship Work that Matters",
                description:
                    "This is a free book! The Lean Startup above talks about Scrum agile methodology, I didn't cover it in a lot of detail because I see a lot of problems with it. In my opinion, it is still miles better than the waterfall approach, but I really like the development cycle explained in this book. The way work is added to backlog, broken down and worked on makes logical sense. I have yet to get to use this at any companies, but as a developer, I think this will deliver better results than Scrum.",
                link: "https://basecamp.com/shapeup",
                imgsrc: BookCoverShapeUp,
            },
        ],
    },
    {
        name: "Coding",
        books: [
            {
                title: "The Clean Coder",
                subtitle: "A Code of Conduct for Professional Programmers",
                description:
                    "I don't read many software development books, because there are so much free online resources around code standards and best practices. I'm suggesting this book for another reason: how to be professional. I have worked in many development teams in my career, and I have to say it is rare to find developers that can be considered professional. This book will teach you how to act as a professional coder, and its standards are very high! Even doing 2/3 of what has been explained in the book will earn you a good reputation during your career.",
                link: "https://amzn.to/2Ncudeq",
                imgsrc: BookCoverCleanCoder,
            },
        ],
    },
    {
        name: "Science",
        books: [
            {
                title: "Sapiens",
                subtitle: "A Brief History of Humankind",
                description:
                    "A good book for understanding the history of the human race, and learn about how we became the dominating species on the plant. This book is very engaging, considering it is a non-fiction book. Throughout the book, I was learning nuggets of new knowledge. While it is essential to achieve career and life goals, this book will bring you back to the big picture.",
                link: "https://amzn.to/3dbivep",
                imgsrc: BookCoverSapiens,
            },
            {
                title: "The Selfish Gene",
                subtitle: "",
                description:
                    "An excellent book that explains how genes drove evolution. It talks about how life on earth has adopted certain traits and behaviours; more importantly, how they were developed over time. The book explains why there could be sacrifices personality traits, why don't all creatures save themselves based on the concept of survival of the fittest. Like Sapiens, after reading this book, it is hard not to see life differently.",
                link: "https://amzn.to/30WULse",
                imgsrc: BookCoverSelfishGene,
            },
        ],
    },
];

const listBooks = () =>
    bookCategories.map((category) => {
        if (category.books.length === 0) return null;

        const books = category.books.map((book) => (
            <Bookmark key={book.title} {...book} />
        ));

        return (
            <div key={category.name}>
                <h2>{category.name}</h2>
                {books}
            </div>
        );
    });

const RecommendedBooks = () => (
    <Layout>
        <SEO title={"Book Recommendations"} />
        <div className="page books">
            <h1 className="page-title">Book Recommendations</h1>
            <p>
                These are the best books that I discovered since graduating from
                university. I try to keep this list meaning and manageable, so
                here you'll only find books that had an impact on my life or at
                least changed how I work.
            </p>

            {listBooks()}
        </div>
    </Layout>
);

export default RecommendedBooks;
