#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let history = [];
let condition = true;
console.log(chalk.bgGreenBright.bold("*********************************************"));
console.log(chalk.bgGreenBright.bold("****************ISLAMIC INFO*****************"));
console.log(chalk.bgGreenBright.bold("*********************************************"));
while (condition) {
    console.log("\n");
    console.log(chalk.bgMagentaBright.bold("1. Basic 5 Fundamentals"), chalk.bgCyan.bold("2. Quran Kareem"), chalk.bgYellow.bold("3. Eid's"), chalk.bgGray.bold("4. Prophet's"), chalk.bgRedBright.bold("5. Sahabah"), chalk.bgGreen.bold("6. Hadiths"), chalk.bgBlue.bold("7. Books"));
    let menuAnswer = await inquirer.prompt([
        {
            name: "menu",
            message: chalk.black.bgWhite.bold("\nSelect which Islamic Information you want:"),
            type: "list",
            choices: [
                "1. Basic 5 Fundamentals",
                "2. Quran Kareem",
                "3. Eid's",
                "4. Prophet's",
                "5. Sahabah",
                "6. Hadiths",
                "7. Books",
            ]
        }
    ]);
    console.log(menuAnswer.menu);
    // For 1. Basic 5 Fundamentals
    if (menuAnswer.menu === "1. Basic 5 Fundamentals") {
        console.log(chalk.bgMagentaBright.bold("\n1. Basic 5 Fundamentals"));
        console.log("\n");
        console.log(chalk.bgMagentaBright.bold("1.1 Toheed (Fait)"), chalk.bgCyan.bold("1.2 Salah (Prayer)"), chalk.bgYellow.bold("1.3 Sawm (Fasting)"), chalk.bgGray.bold("1.4 Zakat (Charity)"), chalk.bgRedBright.bold("1.5 Hajj (Pilgrimage)"));
        history.push(menuAnswer.menu);
        let fundamentalAns = await inquirer.prompt([
            {
                name: "fundamentalMenu",
                message: chalk.black.bgWhite.bold("\nSelect which Basic Fundamental Information you want:"),
                type: "list",
                choices: [
                    "1.1 Toheed (Fait)",
                    "1.2 Salah (Prayer)",
                    "1.3 Sawm (Fasting)",
                    "1.4 Zakat (Charity)",
                    "1.5 Hajj (Pilgrimage)",
                ]
            }
        ]);
        // For Toheed
        if (fundamentalAns.fundamentalMenu === "1.1 Toheed (Fait)") {
            console.log(chalk.bgMagentaBright.bold("\n1.1 Toheed (Fait)"));
            history.push(fundamentalAns.fundamentalMenu);
            console.log(chalk.bgMagentaBright.bold("\nrefers to the concept of the oneness and unity of God. It is the fundamental"));
            console.log(chalk.bgMagentaBright.bold("belief in the absolute oneness of Allah, encompassing His unique attributes,"));
            console.log(chalk.bgMagentaBright.bold("sovereignty, and authority as the one and only deity worthy of worship."));
            console.log(chalk.bgMagentaBright.bold("Toheed is a central tenet of Islamic faith and is emphasized in the declaration"));
            console.log(chalk.bgMagentaBright.bold("of faith known as the Shahada: 'La ilaha illallah' (There is no god but Allah)."));
        }
        // For Swalah
        else if (fundamentalAns.fundamentalMenu === "1.2 Salah (Prayer)") {
            console.log(chalk.bgCyan.bold("\n1.2 Salah (Prayer)"));
            history.push(fundamentalAns.fundamentalMenu);
            console.log("\nThere are 5 Swalah which is Farz (Compulsory) in islam.");
            console.log("\n");
            console.log(chalk.bgMagentaBright.bold("1.1.1 Fajar"), chalk.bgCyan.bold("1.1.2 Zohar"), chalk.bgYellow.bold("1.1.3 Asr"), chalk.bgGray.bold("1.1.4 Maghrib"), chalk.bgRedBright.bold("1.1.5 Isha"));
            let swalahAns = await inquirer.prompt([
                {
                    name: "swalahMenu",
                    message: chalk.black.bgWhite.bold("\nSelect which Swalah Inforamtion you want"),
                    type: "list",
                    choices: [
                        "1.1.1 Fajar",
                        "1.1.2 Zohar",
                        "1.1.3 Asr",
                        "1.1.4 Maghrib",
                        "1.1.5 Isha"
                    ]
                }
            ]);
            // Fajar
            if (swalahAns.swalahMenu === "1.1.1 Fajar") {
                console.log(chalk.bgMagentaBright.bold("\n1.1.1 Fajar"));
                history.push(swalahAns.swalahMenu);
                console.log("\nIn Fajar Swalah, there are total 4 raqats");
                console.log("2 Sunnat Muakkadah");
                console.log("2 Farz");
            }
            // Zohar
            else if (swalahAns.swalahMenu === "1.1.2 Zohar") {
                console.log(chalk.bgCyan.bold("\n1.1.2 Zohar"));
                history.push(swalahAns.swalahMenu);
                console.log("\nIn Zohar Swalah, there are total 12 raqats");
                console.log(chalk.bgMagentaBright.bold("4 Sunnat Muakkadah"));
                console.log(chalk.bgCyan.bold("4 Farz"));
                console.log(chalk.bgYellow.bold("2 Sunnat Muakkadah"));
                console.log(chalk.bgGray.bold("2 Nafil"));
            }
            // Asr
            else if (swalahAns.swalahMenu === "1.1.3 Asar") {
                console.log(chalk.bgYellow.bold("\n1.1.3 Asr"));
                history.push(swalahAns.swalahMenu);
                console.log("\nIn Asar Swalah, there are total 8 raqats");
                console.log(chalk.bgMagentaBright.bold("4 Sunnat"));
                console.log(chalk.bgCyan.bold("4 Farz"));
            }
            // Maghrib
            else if (swalahAns.swalahMenu === "1.1.4 Maghrib") {
                console.log(chalk.bgGray.bold("\n1.1.4 Maghrib"));
                history.push(swalahAns.swalahMenu);
                console.log("\nIn Maghrib Swalah, there are total 7 raqats");
                console.log(chalk.bgMagentaBright.bold("3 Farz"));
                console.log(chalk.bgCyan.bold("2 Sunnat Muakkadah"));
                console.log(chalk.bgYellow.bold("2 Nafil"));
            }
            // Isha
            else if (swalahAns.swalahMenu === "1.1.5 Isha") {
                console.log(chalk.bgRedBright.bold("\n1.1.5 Isha"));
                history.push(swalahAns.swalahMenu);
                console.log("\nIn Isha Swalah, there are total 17 raqats");
                console.log(chalk.bgMagentaBright.bold("4 Sunnat"));
                console.log(chalk.bgCyan.bold("4 Farz"));
                console.log(chalk.bgYellow.bold("2 Sunnat Muakkadah"));
                console.log(chalk.bgGray.bold("2 Nafil"));
                console.log(chalk.bgRedBright.bold("3 Witr"));
                console.log(chalk.bgGreen.bold("2 Nafil"));
            }
        }
        // For Sawm
        else if (fundamentalAns.fundamentalMenu === "1.3 Sawm (Fasting)") {
            console.log(chalk.bgYellow.bold("\n1.3 Sawm (Fasting)"));
            history.push(fundamentalAns.fundamentalMenu);
            console.log(chalk.bgYellow.bold("\nSawm Means observing fasting during the month of Ramadan, abstaining from food, drink,"));
            console.log(chalk.bgYellow.bold("and other physical needs from dawn until sunset."));
            console.log(chalk.bgYellow.bold("There are 30 Sawm's (Fasting) which are Farz (compulsory) on muslims."));
        }
        // For Zakat
        else if (fundamentalAns.fundamentalMenu === "1.4 Zakat (Charity)") {
            console.log(chalk.bgGray.bold("\n1.4 Zakat (Charity)"));
            history.push(fundamentalAns.fundamentalMenu);
            console.log(chalk.bgGray.bold("\nZakat is a mandatory charitable contribution in Islam, calculated as a percentage of wealth"));
            console.log(chalk.bgGray.bold("and given to those in need. The Zakat ratio, or Zakat rate, is typically 2.5% of a Muslim's"));
            console.log(chalk.bgGray.bold("total wealth that meets the Nisab threshold after deducting necessary expenses."));
        }
        // For Hajj
        else if (fundamentalAns.fundamentalMenu === "1.5 Hajj (Pilgrimage)") {
            console.log(chalk.bgRedBright.bold("\n1.5 Hajj (Pilgrimage)"));
            history.push(fundamentalAns.fundamentalMenu);
            console.log(chalk.bgRedBright.bold("\nHajj is the pilgrimage to Mecca that Muslims are required to undertake at least once in their lifetime"));
            console.log(chalk.bgRedBright.bold("if they are physically and financially able."));
            console.log(chalk.bgRedBright.bold("is performed during specific dates in the Islamic lunar calendar. It takes place from the 8th to the 12th of Dhu al-Hijjah,"));
            console.log(chalk.bgRedBright.bold("which is the 12th and final month of the Islamic calendar."));
        } // Basic 5 Fundamentals end here
    }
    // For 2. Quran Kareem
    else if (menuAnswer.menu === "2. Quran Kareem") {
        console.log(chalk.bgCyan.bold("\n2. Quran Kareem"));
        console.log("\n");
        console.log(chalk.bgMagentaBright.bold("2.1 Siparah"), chalk.bgCyan.bold("2.2 Surah"), chalk.bgYellow.bold("2.3 Verses"), chalk.bgGray.bold("2.4 Words"), chalk.bgRedBright.bold("2.5 Sajada"));
        history.push(menuAnswer.menu);
        let quranKareem = await inquirer.prompt([
            {
                name: "quran",
                message: chalk.black.bgWhite.bold("\nSelect Which Information you want about Quran Kareem?"),
                type: "list",
                choices: [
                    "2.1 Siparah",
                    "2.2 Surah",
                    "2.3 Verses",
                    "2.4 Words",
                    "2.5 Sajada"
                ]
            }
        ]);
        if (quranKareem.quran === "2.1 Siparah") {
            console.log(chalk.bgMagentaBright.bold("\n2.1 Siparah"));
            history.push(quranKareem.quran);
            console.log(chalk.bgMagentaBright.bold("\nThere are 30 Siparahs in Quran Kareem."));
        }
        else if (quranKareem.quran === "2.2 Surah") {
            console.log(chalk.bgCyan.bold("\n2.2 Surah"));
            history.push(quranKareem.quran);
            console.log(chalk.bgCyan.bold("\nThere are 114 Surahs in Quran Kareem."));
        }
        else if (quranKareem.quran === "2.3 Verses") {
            console.log(chalk.bgYellow.bold("\n2.3 Verses"));
            history.push(quranKareem.quran);
            console.log(chalk.bgYellow.bold("\nThere are approximatly 6236 Verses in Quran Kareem."));
        }
        else if (quranKareem.quran === "2.4 Words") {
            console.log(chalk.bgGray.bold("\n2.4 Words"));
            history.push(quranKareem.quran);
            console.log(chalk.bgGray.bold("\nThere are 77,430 to 77,934 Words in Quran Kareem."));
        }
        else if (quranKareem.quran === "2.5 Sajada") {
            console.log(chalk.bgRedBright.bold("\n2.5 Sajada"));
            history.push(quranKareem.quran);
            console.log(chalk.bgRedBright.bold("\nThere are 15 Sajadah's in Quran Kareem."));
        }
    }
    // For 3. Eid's
    else if (menuAnswer.menu === "3. Eid's") {
        console.log(chalk.bgYellow.bold("\n3. Eid's"));
        history.push(menuAnswer.menu);
        console.log("\n");
        console.log(chalk.bgMagentaBright.bold("3.1 Eid-ul-Fitar"), chalk.bgCyan.bold("3.2 Eid-ul-Adha"), chalk.bgYellow.bold("3.3 Eid Milad-un-Nabi"));
        let eidAns = await inquirer.prompt([
            {
                name: "eid",
                message: chalk.black.bgWhite.bold("\nSelect about which Eid you want to know:"),
                type: "list",
                choices: [
                    "3.1 Eid-ul-Fitar",
                    "3.2 Eid-ul-Adha",
                    "3.3 Eid Milad-un-Nabi"
                ]
            }
        ]);
        if (eidAns.eid === "3.1 Eid-ul-Fitar") {
            console.log(chalk.bgMagentaBright.bold("\n3.1 Eid-ul-Fitar"));
            history.push(eidAns.eid);
            console.log(chalk.bgMagentaBright.bold("\nEid-ul-Fitar marks the end of Ramadan. It is a day of joy and thanksgiving,"));
            console.log(chalk.bgMagentaBright.bold("during which Muslims gather for communal prayers, give charity (Zakat al-Fitr),"));
            console.log(chalk.bgMagentaBright.bold("exchange gifts, and enjoy festive meals with family and friends."));
        }
        else if (eidAns.eid === "3.2 Eid-ul-Adha") {
            console.log(chalk.bgCyan.bold("\n3.2 Eid-ul-Adha"));
            history.push(eidAns.eid);
            console.log(chalk.bgCyan.bold("\nEid-ul-Adha is the Feast of Sacrifice, Eid al-Adha commemorates Prophet Ibrahim (AS)"));
            console.log(chalk.bgCyan.bold("willingness to sacrifice his son as an act of obedience to God. Muslims celebrate"));
            console.log(chalk.bgCyan.bold("by attending Eid prayers, sacrificing animals (Qurbani), sharing the meat with"));
            console.log(chalk.bgCyan.bold("family and the needy, and reflecting on the importance of faith and submission to God's will."));
        }
        else if (eidAns.eid === "3.3 Eid Milad-un-Nabi") {
            console.log(chalk.bgYellow.bold("\n3.3 Eid Milad-un-Nabi"));
            history.push(eidAns.eid);
            console.log(chalk.bgYellow.bold("\nEid Milad-un-Nabi celebrates the birth of Prophet Muhammad, marked by prayers,"));
            console.log(chalk.bgYellow.bold("gatherings, and reflections on his life and teachings. It is a time of spiritual"));
            console.log(chalk.bgYellow.bold("significance and community unity for Muslims worldwide."));
        }
    }
    // For 4. Prophet's
    else if (menuAnswer.menu === "4. Prophet's") {
        console.log(chalk.bgGray.bold("\n4. Prophet's"));
        history.push(menuAnswer.menu);
        console.log("\n");
        console.log(chalk.bgMagentaBright.bold("4.1 First Prophet"), chalk.bgCyan.bold("4.2 Last Prophet"), chalk.bgYellow.bold("4.3 Total Prophet"));
        let prophets = await inquirer.prompt([
            {
                name: "prophetAns",
                message: chalk.black.bgWhite.bold("\nSelect About which Prophet's you want to know:"),
                type: "list",
                choices: [
                    "4.1 First Prophet",
                    "4.2 Last Prophet",
                    "4.3 Total Prophet"
                ]
            }
        ]);
        if (prophets.prophetAns === "4.1 First Prophet") {
            console.log(chalk.bgMagentaBright.bold("\n4.1 First Prophet"));
            history.push(prophets.prophetAns);
            console.log(chalk.bgMagentaBright.bold("\nThe First Prophet is Hazrat Adam (AS)."));
        }
        else if (prophets.prophetAns === "4.2 Last Prophet") {
            console.log(chalk.bgCyan.bold("\n4.2 Last Prophet"));
            history.push(prophets.prophetAns);
            console.log(chalk.bgCyan.bold("\nThe First Prophet is Hazrat Muhammad (SAW)."));
        }
        else if (prophets.prophetAns === "4.3 Total Prophet") {
            console.log(chalk.bgYellow.bold("\n4.3 Total Prophet"));
            history.push(prophets.prophetAns);
            console.log(chalk.bgYellow.bold("\nSome estimates even suggest that the total number of prophets could be"));
            console.log(chalk.bgYellow.bold("as high as 124,000, although this number is not confirmed in primary Islamic sources."));
        }
    }
    // For 5. Sahabah
    else if (menuAnswer.menu === "5. Sahabah") {
        console.log(chalk.bgRedBright.bold("\n5. Sahabah"));
        history.push(menuAnswer.menu);
        console.log("\n");
        console.log(chalk.bgMagentaBright.bold("5.1 Caliphs"), chalk.bgCyan.bold("5.2 Total Sahabah"));
        console.log("\nSahabah are the companions of the Prophet Muhammad (SAW).");
        let sahabaAns = await inquirer.prompt([
            {
                name: "sahaba",
                message: chalk.black.bgWhite.bold("\nSelect which information you want about Sahabah:"),
                type: "list",
                choices: [
                    "5.1 Caliphs",
                    "5.2 Total Sahabah"
                ]
            }
        ]);
        if (sahabaAns.sahaba === "5.1 Caliphs") {
            console.log(chalk.bgMagentaBright.bold("\n5.1 Caliphs"));
            history.push(sahabaAns.sahaba);
            console.log("\n");
            console.log(chalk.bgMagentaBright.bold("5.1.1 First Caliph"), chalk.bgCyan.bold("5.1.2 Second Caliph"), chalk.bgYellow.bold("5.1.3 Third Caliph"), chalk.bgGray.bold("5.1.4 Forth Caliph"));
            let caliphAns = await inquirer.prompt([
                {
                    name: "caliph",
                    message: chalk.black.bgWhite.bold("\nSelect about which Caliph you want to know:"),
                    type: "list",
                    choices: [
                        "5.1.1 First Caliph",
                        "5.1.2 Second Caliph",
                        "5.1.3 Third Caliph",
                        "5.1.4 Forth Caliph"
                    ]
                }
            ]);
            if (caliphAns.caliph === "5.1.1 First Caliph") {
                console.log(chalk.bgMagentaBright.bold("\n5.1.1 First Caliph"));
                history.push(caliphAns.caliph);
                console.log(chalk.bgMagentaBright.bold("\nThe First Caliph is Hazrat Abu Bakar Siddique (RA)."));
            }
            else if (caliphAns.caliph === "5.1.2 Second Caliph") {
                console.log(chalk.bgCyan.bold("\n5.1.2 Second Caliph"));
                history.push(caliphAns.caliph);
                console.log(chalk.bgCyan.bold("\nThe Second Caliph is Hazrat Umer Farooq (RA)."));
            }
            else if (caliphAns.caliph === "5.1.3 Third Caliph") {
                console.log(chalk.bgYellow.bold("\n5.1.3 Third Caliph"));
                history.push(caliphAns.caliph);
                console.log(chalk.bgYellow.bold("\nThe Third Caliph is Hazrat Usman Ghani (RA)."));
            }
            else if (caliphAns.caliph === "5.1.4 Forth Caliph") {
                console.log(chalk.bgGray.bold("\n5.1.4 Forth Caliph"));
                history.push(caliphAns.caliph);
                console.log(chalk.bgGray.bold("\nThe Forth Caliph is Hazrat Ali (RA)."));
            }
        }
        else if (sahabaAns.sahaba === "5.2 Total Sahabah") {
            console.log(chalk.bgCyan.bold("\n5.2 Total Sahabah"));
            history.push(sahabaAns.sahaba);
            console.log(chalk.bgCyan.bold("\nThe exact number of Sahabas is not known,"));
            console.log(chalk.bgCyan.bold("Some sources mention numbers ranging from 70,000 to over 100,000 Sahabah."));
        }
    }
    // For 6. Hadiths
    else if (menuAnswer.menu === "6. Hadiths") {
        console.log(chalk.bgGreen.bold("\n6. Hadiths"));
        history.push(menuAnswer.menu);
        console.log(chalk.bgGreen.bold("\nHadiths are records of the traditions or sayings of Prophet Muhammad, peace be upon him,"));
        console.log(chalk.bgGreen.bold("and his actions, approvals, or disapprovals regarding certain actions. They are considered"));
        console.log(chalk.bgGreen.bold("an essential source of guidance for Muslims, providing insights into various aspects of"));
        console.log(chalk.bgGreen.bold("religious practices, ethics, and jurisprudence."));
    }
    // For 7. Books
    else if (menuAnswer.menu === "7. Books") {
        console.log(chalk.bgBlue.bold("\n7. Books"));
        history.push(menuAnswer.menu);
        console.log("\n");
        console.log(chalk.bgMagentaBright.bold("7.1 Torait"), chalk.bgCyan.bold("7.2 Zaboor"), chalk.bgYellow.bold("7.3 Injil"), chalk.bgGray.bold("7.4 Quran Majeed"));
        console.log("\nThere are Four Books in Islam but the first three books are not in their real condition.");
        let booksAns = await inquirer.prompt([
            {
                name: "book",
                message: chalk.black.bgWhite.bold("\nSelect about which Book you want to know:"),
                type: "list",
                choices: [
                    "7.1 Torait",
                    "7.2 Zaboor",
                    "7.3 Injil",
                    "7.4 Quran Majeed"
                ]
            }
        ]);
        if (booksAns.book === "7.1 Torait") {
            console.log(chalk.bgMagentaBright.bold("\n7.1 Torait"));
            history.push(booksAns.book);
            console.log(chalk.bgMagentaBright.bold("\nTorait is associated with Hazrat Musa (AS)."));
            console.log(chalk.bgMagentaBright.bold("Now Torait is not in real condition."));
        }
        else if (booksAns.book === "7.2 Zaboor") {
            console.log(chalk.bgCyan.bold("\n7.2 Zaboor"));
            history.push(booksAns.book);
            console.log(chalk.bgCyan.bold("\nZaboor is associated with Hazrat Dawud (AS)."));
            console.log(chalk.bgCyan.bold("Now Zaboor is not in real condition."));
        }
        else if (booksAns.book === "7.3 Injil") {
            console.log(chalk.bgYellow.bold("\n7.3 Injil"));
            history.push(booksAns.book);
            console.log(chalk.bgYellow.bold("\nInjil is associated with Hazrat Eesa (AS)."));
            console.log(chalk.bgYellow.bold("Now Injil is not in real condition."));
        }
        else if (booksAns.book === "7.4 Quran Majeed") {
            console.log(chalk.bgGray.bold("\n7.4 Quran Majeed"));
            history.push(booksAns.book);
            console.log(chalk.bgGray.bold("\nQuran Majeed is associated with Hazrat Muhammad (SAW)."));
            console.log(chalk.bgGray.bold("Quran Majeed is still in real condition and will be in real condition."));
        }
    }
    console.log(chalk.underline.bgGreenBright.bold("\nHistory of Information: "), chalk.underline.black.bgWhite.bold(history));
    // For Exit
    let moreInfo = await inquirer.prompt([
        {
            name: "more",
            message: chalk.bgRed.bold("\nDo you want to more Information?"),
            type: "confirm",
            default: "false"
        }
    ]);
    condition = moreInfo.more;
}
//exit
console.log(chalk.bgRed.bold("\nExit"));
