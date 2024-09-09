import React, {   } from "react";
import { CardStack } from "@/components/ui/card-stack";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-and-vanish-input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import DOMPurify from "dompurify";
import {
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFileExcel,
  FaFileAlt,
  FaFileVideo,
  FaFileAudio,
  FaFileArchive,
  FaFile,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function Dashboard() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  type Card = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    snippet: string;
    created: string;
  }[];

  const rows: Card = [
    {
      id: 1,
      name: "pranjal rana",
      email: "pranjal@gmail.com",
      snippet:
        "this is a snippet  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quaerat, natus eos voluptas, quisquam non voluptatem vel temporibus corrupti totam ullam! Quos, aut soluta nostrum eveniet ad similique quod iste! ",
      created: "12:30",
      avatar:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80   ",
    },

    {
      id: 2,
      name: "dada",
      email: "pranjal@gmail.com",
      snippet:
        "this is a snippet   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste ad ipsa accusantium optio eum, ea voluptatem velit esse! Exercitationem, voluptates! Tempora neque, distinctio voluptatibus voluptate necessitatibus ab beatae",
      created: "12 aug",
      avatar:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80   ",
    },
    {
      id: 3,
      name: "sss",
      email: "pranjal@gmail.com",
      snippet: "this is a snippet",
      created: "11 july",
      avatar:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80   ",
    },
    {
      id: 4,
      name: "sss",
      email: "pranjal@gmail.com",
      snippet: "this is a snippet",
      created: "12/12/2021",
      avatar:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80   ",
    },
    {
      id: 5,
      name: "sss",
      email: "pranjal@gmail.com",
      snippet: "this is a snippet",
      created: "12/12/2021",
      avatar:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80   ",
    },
  ];
  const htmlContent = `<!doctype html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&amp;family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap\" rel=\"stylesheet\">\r\n    <title>Mentra Email</title>\r\n    <style>\r\n        @font-face {\r\n            font-family: 'Philosopher';\r\n            font-style: italic;\r\n            font-weight: 400;\r\n            font-display: swap;\r\n            src: url('https://app.yourmentra.com/email/font/san_serif_philosopher.woff2');\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n        }\r\n\r\n        table {\r\n            border-spacing: 0;\r\n        }\r\n\r\n        td {\r\n            padding: 0;\r\n        }\r\n\r\n        img {\r\n            border: 0;\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        p {\r\n            margin: 0;\r\n            padding: 0;\r\n            color: #002c3c;\r\n        }\r\n\r\n        .main-table {\r\n            width: 100%;\r\n            table-layout: fixed;\r\n            background-color: #f2f2ef;\r\n            max-width: 792px;\r\n            position: relative;\r\n        }\r\n\r\n        .top-bar {\r\n            width: 100%;\r\n            height: 113px;\r\n            background-color: #fff7e0;\r\n            position: relative;\r\n        }\r\n\r\n        .title {\r\n            margin: 0 auto;\r\n        }\r\n\r\n        .logo-cont {\r\n            width: 16%;\r\n            height: 16%;\r\n            position: absolute;\r\n            top: 10%;\r\n            left: 5%;\r\n            min-width: 85px;\r\n            transform: translateY(-50%);\r\n            display: inline-block;\r\n        }\r\n\r\n        .logo-cont img {\r\n            width: 100%;\r\n            height: 100%;\r\n            /* display: inline-block; */\r\n        }\r\n\r\n        .second-sec {\r\n            padding: 50px;\r\n            /* background: url(\"./images/rocks.png\");\r\n        background-size: cover; */\r\n            width: 100%;\r\n        }\r\n\r\n        .second-sec h2 {\r\n            font-size: 5em;\r\n            line-height: 90px;\r\n        }\r\n\r\n        .second-sec p {\r\n            font-size: 35px;\r\n        }\r\n\r\n        .content-sec {\r\n            margin: 0 7%;\r\n            padding: 30px 25px;\r\n            background-color: #fff7e0;\r\n            width: 85%;\r\n        }\r\n\r\n        .content-sec h2 {\r\n            font-size: 20px;\r\n            font-weight: 400;\r\n            padding-bottom: 15px;\r\n        }\r\n\r\n        .sub-head-img img {\r\n            width: 100px;\r\n        }\r\n\r\n        .sub-head-highlight {\r\n            background-color: #fae19d;\r\n            min-width: 270px;\r\n            width: 100%;\r\n            max-width: 500px;\r\n            height: fit-content;\r\n            min-height: 45px;\r\n            padding: 5px 30px 5px 0;\r\n            border-radius: 0 50% 50% 0;\r\n        }\r\n\r\n        .sub-head-highlight2 {\r\n            background-color: #fae19d;\r\n            width: 270px;\r\n            height: 40px;\r\n            border-radius: 50% 0 0 50%;\r\n        }\r\n\r\n        .sub-head-highlight h3 {\r\n            font-size: 17px;\r\n            padding-left: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .sub-head-highlight2 h3 {\r\n            font-size: 20px;\r\n            padding-right: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .inline-el {\r\n            display: inline-block;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .inline-el2 {\r\n            display: inline;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .sub-head-info {\r\n            width: 100%;\r\n            max-width: 480px;\r\n        }\r\n\r\n        .sub-head-info p {\r\n            padding-top: 10px;\r\n            font-weight: 500;\r\n            word-spacing: 3px;\r\n        }\r\n\r\n        .connect_img_sec img {\r\n            display: inline-block;\r\n            height: 20px;\r\n            width: 20px;\r\n            vertical-align: bottom;\r\n        }\r\n\r\n        .bottom-bd {\r\n            height: 30px;\r\n            width: 100%;\r\n            background-color: #fff7e0;\r\n        }\r\n\r\n        .logoCont {\r\n            width: 15%;\r\n        }\r\n\r\n        .logoImg {\r\n            width: 100%;\r\n        }\r\n\r\n        @media only screen and (max-width: 768px) {\r\n            .logoCont {\r\n                width: 17%;\r\n                margin-left: 4%\r\n            }\r\n            .logoName {\r\n                margin-left: 20% !important;\r\n            }\r\n\r\n            .top-bar {\r\n                height: 80px !important;\r\n            }\r\n\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;\"><img width=\"1\" height=\"1\" src='https://heafgee.r.bh.d.sendibt3.com/tr/op/NpkTln6E8jAcJnkcE73DYaIgYrpi6Y2mfLiySzFfIwiPgCmAux8poYOJuEIZEqovFP2l72jiKvvQOj0ogSFe7gkjlTLNcBRmcyArWpyXMlVwuFkn7OATT9qvDpjJ2FJn3FtMEN7AzQTaSWzcSE8RJF35Lidb-oDALvlBlOR5I69NcVnlO0q1grjsTASXdMqSC3-ImItWRXFQ2i2jLqRKqRx-5w' />\r\n    <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; table-layout: fixed; background-color: #f2f2ef; max-width: 792px; position: relative; margin: 0 auto;\" class=\"main-table\">\r\n        <tr>\r\n            <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                <table class=\"top-bar\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; height: 113px; background-color: #fff7e0; position: relative;\">\r\n                    <tr>\r\n\r\n                        <td class=\"logoCont\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 15%;\">\r\n                            <img class=\"logoImg\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/5753193a0b9bc3384584c0e95fa38596cb50c4c6e33cfe2d9b381d0018433ec6.png?e=ZXQ5FuQtxPwqHbKIts8H24d-Vcb2YGkDCbxsHxGRwPdNYoTaMoHSpFj5q4mm69N87K_nAFbMEODbfUtyzjBXB7dh4-rVTHbLFdAXJyEtm2oFmX3lBzAcBVe8TD-QTNyNDa9gP1tXADqlqs-chbtUghsMLANPXul8idqV60gj-tKu5Q2bPQXXEwBp2QT96qyuQ6ABiVNYnOhZs6fH1PZZD2ReMxVXBDYfmyMtxeJex94wex43cWeVWP24oMBAaoS24SRJpmIee9K3LNWcMYQmjCR7UTZ-8qSIOIXxGFm76zgoxw\" alt=\"Mentra\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 100%;\">\r\n                        </td>\r\n\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h1 class=\"logoName\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; font-weight: bold; margin-top: 0; text-align: left; letter-spacing: 10px; margin-left: 30%; font-size: 22px; color: #002c3c; font-family: 'Philosopher', sans-serif;\">\r\n                                MENTRA\r\n                            </h1>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\"></td>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%;\">\r\n                            <h2 style=\"box-sizing: border-box; position: relative; margin: 0; font-weight: bold; margin-top: 0; font-size: 32px; padding: 60px 20px 30px; color: #002c3c; text-align: center; font-family: 'Philosopher', sans-serif; max-width: 607px; display: inline-block;\">\r\n                                Welcome to Mentra – Your Path to Mental and Emotional\r\n                                Wellbeing!\r\n                            </h2>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%; padding-bottom: 35px;\">\r\n                            <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; display: inline-block; width: 100px;\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/e564c203530dc2989516cda0340a91c585dfe6289a690c390e8052106e223651.png?e=IvQwu0UBrNm6jGG-yU-jmM99y_3JTE6is3tD9XSRfVt2tFx87AOr-6J0ooi7W3r2EDwv3e-hBiAzem5o9yQNlbIzhllWLdJceAxyNJbpIpK2juJmAh6Vj4qwkAvt1KcQY8rWgED_QXuyi2A59tqlFF2LGpidAg6dcDYAwtOTzc2YzlzqaonD_b-CYDKiaV91W7qJW089_msPGtEURb-pmW0uyvW9Xl1hdBBbJvzTn2tR-RxVOEP3tDuS5WUF7BYBxrM_2xLcu0I4u7wKFJWz78bEleir2vnzgndBsztPdEqeJHSfTTfR\" alt=\"mail\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"content-sec\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; margin: 0 7%; padding: 30px 25px; background-color: #fff7e0; width: 85%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h2 class=\"philosopher\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; margin-top: 0; text-align: left; font-size: 20px; padding-bottom: 15px; font-family: 'Philosopher', sans-serif; color: #002c3c; font-weight: 700;\">\r\n                                Hello pranjal!\r\n                            </h2>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px;\">\r\n                                            Big smiles and a warm welcome! I’m Mentra, your\r\n                                            onboarding buddy, here to make sure your journey with us\r\n                                            is smooth, enjoyable, and packed with growth. We’re\r\n                                            super excited to have you join our community, where\r\n                                            mental and emotional wellness takes centre stage.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; padding-top: 20px; font-size: 15px;\">\r\n                                            First things first: Your privacy is a big deal for us.\r\n                                            Every chat here is private and anonymous, meaning you\r\n                                            can truly be yourself without any worries. Your data?\r\n                                            It’s yours and yours alone – safe, secure, and\r\n                                            respected.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; background-color: #fae19d; min-width: 270px; width: 100%; max-width: 500px; height: fit-content; min-height: 45px; padding: 5px 30px 5px 0; border-radius: 0 50% 50% 0; margin-top: 40px;\" class=\"sub-head-highlight\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <h3 style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; font-weight: bold; margin-top: 0; font-size: 17px; padding-left: 20px; text-align: left; text-transform: none; font-family: 'Philosopher', sans-serif;\" class=\"philosopher\">\r\n                                            Here’s what’s waiting for you at Mentra:\r\n                                        </h3>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; padding-top: 25px;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: left; width: 100%;\">\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; vertical-align: top;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 18px;\">\r\n                                                    <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 9px;\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/b667eda57462d95c3c26598207bbd06b0189561ccc53798a44c50a25c81c09ea.png?e=e1VyjZVRKZKr_tsSKsvJ7pRK87vwfW-HVZCSgx_c4M8dXXq4RZg5_oza2SU0p3nP2DSH86SygDXXZkEP9zaLPDrEL5AXvACzhZhC2dwg2vMiVLBbQCz5SKw5OFU6SGPVDgkwRcq9k8qcN4w-JdKSqmwA_hEQpKEcfzVoOj3LPP_fKvvp1gZkC7rZ1kN_Ht3ZN9Tc7GU07Uii6BlW9j21NDEyk-BdEY75wV92P6Sd9yIK9KfZrLT-C4p_ImLg7SH8PqZ24fdDBhYO7sxjo_Wp2kKttEtBHYBOgs5bBVtzfDvR-Nq53Ec\" alt=\"dot\">\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; width: 90%;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                                    <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500; line-height: 20px; font-size: 15px;\">\r\n                                                        Around-the-clock support, tailored just for your\r\n                                                        needs.\r\n                                                    </p>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; padding-top: 20px;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: left; width: 100%;\">\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; vertical-align: top;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 18px;\">\r\n                                                    <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 9px;\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/b667eda57462d95c3c26598207bbd06b0189561ccc53798a44c50a25c81c09ea.png?e=cHKNBtu0nZBYNgr6xsP3KW4pkuPPGETYf9RSRs1Lj2GWxXu3DElyRjil87EgZ_xigln-KO4SwOMBCh76TbK7GWYpIkManE5wsYHDEu6r1i_1BP12W0QqKDPAgOlFQ0KRm6I6EHW1tNJ8pV7DJfXOsqhbtnbBChAmAN3sHXDEwblUHAVzYs0zrULo5kgsHf0eyaUEdIGuhjnr7j2JOXZcA1H8NhjaUmDsJY6NnU2Gw8yzmcB6DZ5HdRRFDV39UJtbMUY7ZMqISUpMhJm6PsHXA9uWZOwOsrjdBtvNyjgZBP1ibGI7ux8\" alt=\"dot\">\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; width: 90%;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                                    <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500; line-height: 20px; font-size: 15px;\">\r\n                                                        A treasure trove of resources and tools to empower\r\n                                                        you on your wellness journey.\r\n                                                    </p>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; padding-top: 20px;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: left; width: 100%;\">\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; vertical-align: top;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 18px;\">\r\n                                                    <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 9px;\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/b667eda57462d95c3c26598207bbd06b0189561ccc53798a44c50a25c81c09ea.png?e=W30lvS7Qmi5Eopx1nFLDT-ktDmwdEeZSFGd8YdABUAwjZRoDsNpfFAWXsI5VepN2MgGNiu3EselTd5e2-9ql-PJm0753uj3uX_OGeESTKf9QpFIR5cA8Dho7HWU27Qe8RgZb1pZyUmEBjhQl1zCdNHSk_VzTg_OJDa3SoBWS3iC4qM0YOD-rzckWWw7tVTomtUxvXqxSG2t29XrFnYTV82QK9TFFxxbKwobJmMP2cuufdXXkXSlSW7t5Y9KWRmgYLpKsn0LeuGQPbDCGuvzPSD0JBCJ8ZcE2RjUAreqquiuCGXulYQM\" alt=\"dot\">\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; width: 90%;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                                    <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500; line-height: 20px; font-size: 15px;\">\r\n                                                        A guided journal to help you express your thoughts\r\n                                                        and feelings without fear of judgment.\r\n                                                    </p>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; padding-top: 20px;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: left; width: 100%;\">\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; vertical-align: top;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 18px;\">\r\n                                                    <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 9px;\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/b667eda57462d95c3c26598207bbd06b0189561ccc53798a44c50a25c81c09ea.png?e=qFKNcG3ICEZRYbyrTnu4jiew14hD57cxdB08gP_0CWhisHL8w8swzOJugFiIdyegc6Aab1ycJIDH77F7Ss14MAK-Gnzco3AQZ68DaKu9TAtoup2ZBnVr5al2ZLa0_3or3vlCgS5-6mgp3wVp41N-7pcBFRqcSZLgWDKK7edaSSnaDilom0q0SzkffMDkoWVKAAM759Qfh2Upf91tRs04-BMWzOCXrdqGFIZFgpMiipegS5DBPSb2v6NSXGcTu7AkJWRz6kjNG7VWzlNAofzUtzOwLc9vOu47AzGcnocsMNMelK7AiL4\" alt=\"dot\">\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                        <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; display: inline-block; width: 90%;\">\r\n                                            <tr>\r\n                                                <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                                    <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500; line-height: 20px; font-size: 15px;\">\r\n                                                        Guaranteed anonymity, so you can explore, share,\r\n                                                        and grow without holding back.\r\n                                                    </p>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-size: 15px; line-height: 24px; font-weight: 500; padding-top: 40px; font-family: 'Plus Jakarta Sans', sans-serif;\">\r\n                                            Ready to dive in? Discover all the exciting ways Mentra\r\n                                            is here to support your journey to a happier, healthier\r\n                                            you.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 60px;\">\r\n                                            Your buddy,\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 0px;\">\r\n                                            Mentra\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; margin-top: 40px;\">\r\n                    <tr>\r\n                        <td class=\"bottom-bd\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; height: 30px; width: 100%; background-color: #fff7e0;\"></td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</body>\r\n\r\n</html>\r\n\r\n"},{"payload":"<!doctype html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&amp;family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap\" rel=\"stylesheet\">\r\n    <title>Mentra Email</title>\r\n    <style>\r\n        /* @import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\"); */\r\n        body {\r\n            margin: 0;\r\n        }\r\n\r\n        table {\r\n            border-spacing: 0;\r\n        }\r\n\r\n        td {\r\n            padding: 0;\r\n        }\r\n\r\n        img {\r\n            border: 0;\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        p {\r\n            margin: 0;\r\n            padding: 0;\r\n            color: #002c3c;\r\n        }\r\n\r\n        .main-table {\r\n            width: 100%;\r\n            table-layout: fixed;\r\n            background-color: #f2f2ef;\r\n            max-width: 792px;\r\n            position: relative;\r\n        }\r\n\r\n        .top-bar {\r\n            width: 100%;\r\n            height: 113px;\r\n            background-color: #fff7e0;\r\n            position: relative;\r\n        }\r\n\r\n        .title {\r\n            margin: 0 auto;\r\n        }\r\n\r\n        .logo-cont {\r\n            width: 16%;\r\n            height: 16%;\r\n            position: absolute;\r\n            top: 10%;\r\n            left: 5%;\r\n            min-width: 85px;\r\n            transform: translateY(-50%);\r\n            display: inline-block;\r\n        }\r\n\r\n        .logo-cont img {\r\n            width: 100%;\r\n            height: 100%;\r\n            /* display: inline-block; */\r\n        }\r\n\r\n        .second-sec {\r\n            padding: 50px;\r\n            /* background: url(\"./images/rocks.png\");\r\n        background-size: cover; */\r\n            width: 100%;\r\n        }\r\n\r\n        .second-sec h2 {\r\n            font-size: 5em;\r\n            line-height: 90px;\r\n        }\r\n\r\n        .second-sec p {\r\n            font-size: 35px;\r\n        }\r\n\r\n        .content-sec {\r\n            margin: 0 7%;\r\n            padding: 30px 25px;\r\n            background-color: #fff7e0;\r\n            width: 85%;\r\n        }\r\n\r\n        .content-sec h2 {\r\n            font-size: 20px;\r\n            font-weight: 400;\r\n            padding-bottom: 15px;\r\n        }\r\n\r\n        .sub-head-img img {\r\n            width: 100px;\r\n        }\r\n\r\n        .sub-head-highlight {\r\n            background-color: #fae19d;\r\n            min-width: 270px;\r\n            width: 100%;\r\n            max-width: 500px;\r\n            height: fit-content;\r\n            min-height: 45px;\r\n            padding: 5px 30px 5px 0;\r\n            border-radius: 0 50% 50% 0;\r\n        }\r\n\r\n        .sub-head-highlight2 {\r\n            background-color: #fae19d;\r\n            width: 270px;\r\n            height: 40px;\r\n            border-radius: 50% 0 0 50%;\r\n        }\r\n\r\n        .sub-head-highlight h3 {\r\n            font-size: 17px;\r\n            padding-left: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .sub-head-highlight2 h3 {\r\n            font-size: 20px;\r\n            padding-right: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .inline-el {\r\n            display: inline-block;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .inline-el2 {\r\n            display: inline;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .sub-head-info {\r\n            width: 100%;\r\n            max-width: 480px;\r\n        }\r\n\r\n        .sub-head-info p {\r\n            padding-top: 10px;\r\n            font-weight: 500;\r\n            word-spacing: 3px;\r\n        }\r\n\r\n        .connect_img_sec img {\r\n            display: inline-block;\r\n            height: 20px;\r\n            width: 20px;\r\n            vertical-align: bottom;\r\n        }\r\n\r\n        .bottom-bd {\r\n            height: 30px;\r\n            width: 100%;\r\n            background-color: #fff7e0;\r\n        }\r\n\r\n        .logoCont {\r\n            width: 15%;\r\n        }\r\n\r\n        .logoImg {\r\n            width: 100%;\r\n        }\r\n\r\n        @media only screen and (max-width: 768px) {\r\n            .logoCont {\r\n                width: 17%;\r\n                margin-left: 4%\r\n            }\r\n            .logoName {\r\n                margin-left: 20% !important;\r\n            }\r\n\r\n            .top-bar {\r\n                height: 80px !important;\r\n            }\r\n\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;\"><img width=\"1\" height=\"1\" src='https://heafgee.r.bh.d.sendibt3.com/tr/op/Kjo3PWf2MXodSvdYsDCSeUGCr4IbUoICEYaOE_wcPao3u7Ei1uKZdhL3S_MxrsTPbY8S__GSFQYX1CjIxH7oC8CwibbnJ6nqtl3Z-wIhgP7MQPux4Lcx_mObboG3TYBV2Pi6CvnTLo893gsh23eM4W0p2Cd8Wk-fLh_XEDJ3lU8yvKRdpOa8HAEUPFHdNos3PAAtKhAANG--H5HHE8kYTTWbdA' />\r\n    <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; table-layout: fixed; background-color: #f2f2ef; max-width: 792px; position: relative; margin: 0 auto;\" class=\"main-table\">\r\n        <tr>\r\n            <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                <table class=\"top-bar\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; height: 113px; background-color: #fff7e0; position: relative;\">\r\n                    <tr>\r\n\r\n                        <td class=\"logoCont\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 15%;\">\r\n                            <img class=\"logoImg\" src=\"https://d1jdg.img.bh.d.sendibt3.com/im/7405644/5753193a0b9bc3384584c0e95fa38596cb50c4c6e33cfe2d9b381d0018433ec6.png?e=qfQGG6DPqZXFoZ_WES14RdO1ypPup-ZMhL6H5K9CAu8ZAvSVi59l5j7xksIzZd2aIsaidG4_5t_E9TK3nD-uzD7x8PKwi1pHaQ7lLpCkv2Po0B3QCNUVoyUjsVf8tfAoCEPcNdoJdD7KLtdMLg3qt4WD4lzNEXYVANzpcEWhh2EdP8HyMGxd48iE5w7_qNFsQjTNBaHffo19PJRdP6YVn-ctOipmtRYDZgVseUU5gp3fY3nsDC92tRnKPlyJ9fe2L4XnFrHSGCx9siFWTMiENIjCay9dgfnnOHLhCKPEOya6cQ\" alt=\"Mentra\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 100%;\">\r\n                        </td>\r\n\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h1 class=\"logoName\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; font-weight: bold; margin-top: 0; text-align: left; letter-spacing: 10px; margin-left: 30%; font-size: 22px; color: #002c3c; font-family: 'Philosopher', sans-serif;\">\r\n                                MENTRA\r\n                            </h1>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\"></td>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%;\">\r\n                            <h2 style=\"box-sizing: border-box; position: relative; margin: 0; font-weight: bold; margin-top: 0; font-size: 32px; padding: 60px 20px 30px; color: #002c3c; text-align: center; font-family: 'Philosopher', sans-serif; max-width: 607px; display: inline-block;\">\r\n                              Your Mentra Verification Code\r\n                            </h2>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%; padding-bottom: 35px;\">\r\n                            <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; display: inline-block; width: 100px;\" src=\"https://d1jdg.img.bh.d.sendibt3.com/im/7405644/e564c203530dc2989516cda0340a91c585dfe6289a690c390e8052106e223651.png?e=Kwqsf6Sb0-QV3rTSV8vyxV1JKd4VrlKyl0fuHDVZG0SRnXLQJXT2L6Cif1qWp53DMp65XuLcXPn6QLtQi-DkSh22bn2XoY0S1yEdaE72yrIPlShXnJworWr-e8yDe6XJNgXkN50GcaRTXW9u_gpia1BGmDF-LklfvMZPMkA6AUuERfTXcHOs9A2j8LBZa0VoIYSbtw_tmyGF7cYYv1ha3BzCHts367QQDrG91tn4ANCg3l4J6JSZMowkqrluQLz1pGJ9JrlJFmnrA_sgikdpT0hvpjVUAUf_rJ2qWrxmfGDSbJN89EnO\" alt=\"mail\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"content-sec\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; margin: 0 7%; padding: 30px 25px; background-color: #fff7e0; width: 85%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h2 class=\"philosopher\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; margin-top: 0; text-align: left; font-size: 20px; padding-bottom: 15px; font-family: 'Philosopher', sans-serif; color: #002c3c; font-weight: 700;\">\r\n                        \r\n                                Welcome to Mentra,User!\r\n                            </h2>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px; padding-top: 15px;\">\r\n                                            Here's your verification code to get started:\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px; padding-top: 20px;\">\r\n                                            <b style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\">CODE</b>: 9427 <i style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\">(Expires in 10 minutes from now)<i style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\"><br><br>\r\n                                        </i></i></p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px;\">\r\n                                            Simply enter this code in the app to verify your email and jump right into your new wellness journey.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; padding-top: 20px; font-size: 15px;\">\r\n                                            If you didn't request this, no worries—just ignore this email.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 30px;\">\r\n                                            Cheers to your journey ahead,\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 0px;\">\r\n                                            Mentra\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; margin-top: 40px;\">\r\n                    <tr>\r\n                        <td class=\"bottom-bd\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; height: 30px; width: 100%; background-color: #fff7e0;\"></td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</body>\r\n\r\n</html>\r\n\r\n"},{"payload":"<!doctype html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&amp;family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap\" rel=\"stylesheet\">\r\n    <title>Mentra Email</title>\r\n    <style>\r\n        /* @import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\"); */\r\n        body {\r\n            margin: 0;\r\n        }\r\n\r\n        table {\r\n            border-spacing: 0;\r\n        }\r\n\r\n        td {\r\n            padding: 0;\r\n        }\r\n\r\n        img {\r\n            border: 0;\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        p {\r\n            margin: 0;\r\n            padding: 0;\r\n            color: #002c3c;\r\n        }\r\n\r\n        .main-table {\r\n            width: 100%;\r\n            table-layout: fixed;\r\n            background-color: #f2f2ef;\r\n            max-width: 792px;\r\n            position: relative;\r\n        }\r\n\r\n        .top-bar {\r\n            width: 100%;\r\n            height: 113px;\r\n            background-color: #fff7e0;\r\n            position: relative;\r\n        }\r\n\r\n        .title {\r\n            margin: 0 auto;\r\n        }\r\n\r\n        .logo-cont {\r\n            width: 16%;\r\n            height: 16%;\r\n            position: absolute;\r\n            top: 10%;\r\n            left: 5%;\r\n            min-width: 85px;\r\n            transform: translateY(-50%);\r\n            display: inline-block;\r\n        }\r\n\r\n        .logo-cont img {\r\n            width: 100%;\r\n            height: 100%;\r\n            /* display: inline-block; */\r\n        }\r\n\r\n        .second-sec {\r\n            padding: 50px;\r\n            /* background: url(\"./images/rocks.png\");\r\n        background-size: cover; */\r\n            width: 100%;\r\n        }\r\n\r\n        .second-sec h2 {\r\n            font-size: 5em;\r\n            line-height: 90px;\r\n        }\r\n\r\n        .second-sec p {\r\n            font-size: 35px;\r\n        }\r\n\r\n        .content-sec {\r\n            margin: 0 7%;\r\n            padding: 30px 25px;\r\n            background-color: #fff7e0;\r\n            width: 85%;\r\n        }\r\n\r\n        .content-sec h2 {\r\n            font-size: 20px;\r\n            font-weight: 400;\r\n            padding-bottom: 15px;\r\n        }\r\n\r\n        .sub-head-img img {\r\n            width: 100px;\r\n        }\r\n\r\n        .sub-head-highlight {\r\n            background-color: #fae19d;\r\n            min-width: 270px;\r\n            width: 100%;\r\n            max-width: 500px;\r\n            height: fit-content;\r\n            min-height: 45px;\r\n            padding: 5px 30px 5px 0;\r\n            border-radius: 0 50% 50% 0;\r\n        }\r\n\r\n        .sub-head-highlight2 {\r\n            background-color: #fae19d;\r\n            width: 270px;\r\n            height: 40px;\r\n            border-radius: 50% 0 0 50%;\r\n        }\r\n\r\n        .sub-head-highlight h3 {\r\n            font-size: 17px;\r\n            padding-left: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .sub-head-highlight2 h3 {\r\n            font-size: 20px;\r\n            padding-right: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .inline-el {\r\n            display: inline-block;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .inline-el2 {\r\n            display: inline;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .sub-head-info {\r\n            width: 100%;\r\n            max-width: 480px;\r\n        }\r\n\r\n        .sub-head-info p {\r\n            padding-top: 10px;\r\n            font-weight: 500;\r\n            word-spacing: 3px;\r\n        }\r\n\r\n        .connect_img_sec img {\r\n            display: inline-block;\r\n            height: 20px;\r\n            width: 20px;\r\n            vertical-align: bottom;\r\n        }\r\n\r\n        .bottom-bd {\r\n            height: 30px;\r\n            width: 100%;\r\n            background-color: #fff7e0;\r\n        }\r\n\r\n        .logoCont {\r\n            width: 15%;\r\n        }\r\n\r\n        .logoImg {\r\n            width: 100%;\r\n        }\r\n\r\n        @media only screen and (max-width: 768px) {\r\n            .logoCont {\r\n                width: 17%;\r\n                margin-left: 4%\r\n            }\r\n            .logoName {\r\n                margin-left: 20% !important;\r\n            }\r\n\r\n            .top-bar {\r\n                height: 80px !important;\r\n            }\r\n\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;\"><img width=\"1\" height=\"1\" src='https://heafgee.r.bh.d.sendibt3.com/tr/op/vNEXHYqy1OE7FrwhdIKNUjy84Vw5LfaCBu2XjqFWeSmZnz8dipnG39k7S6L3_Yl8CDEMHXONJBPpyIEQaIPAvCjIVH_uVO8y2_9oO7QmxH3AFF4m9NHx3NoMiEvvDHxgI27C08D9YAG5SDesy0yCHyNu3n3Bcr3953DZVRYZWKzCz1Noy6IrH54VlI1hGHcNfPXMnnWKAAHe6yPxJyUUZBSuQQ' />\r\n    <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; table-layout: fixed; background-color: #f2f2ef; max-width: 792px; position: relative; margin: 0 auto;\" class=\"main-table\">\r\n        <tr>\r\n            <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                <table class=\"top-bar\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; height: 113px; background-color: #fff7e0; position: relative;\">\r\n                    <tr>\r\n\r\n                        <td class=\"logoCont\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 15%;\">\r\n                            <img class=\"logoImg\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/5753193a0b9bc3384584c0e95fa38596cb50c4c6e33cfe2d9b381d0018433ec6.png?e=Ewf6HM8fiMUyVmbaLKuRQAnF8c1yDwASb2HI_TEmGkZV37Pss0W8RvpIecL8cBwi6Hk8uDIZlrkrD4LJCGEc7IRNCMH1gpUshjwAAKXkKsmC-q-UGzi55rQY0vmTACS5piFROyCyaiZLpMo1YtNNZisd9Jw8hr5r2DhMAREHUn1l_8jjJlqTwuj1GQKfNvbhfTeabSYJHHObU7Xhw2oH4qAQOq-q8rmqIy6kRXSf5Y7I88xeBmFx8kR3IGtbFWV2LaEtW_TjPc9SySRufPWpbZaTF0LT5QfnN7A9OLdQXpqisg\" alt=\"Mentra\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 100%;\">\r\n                        </td>\r\n\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h1 class=\"logoName\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; font-weight: bold; margin-top: 0; text-align: left; letter-spacing: 10px; margin-left: 30%; font-size: 22px; color: #002c3c; font-family: 'Philosopher', sans-serif;\">\r\n                                MENTRA\r\n                            </h1>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\"></td>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%;\">\r\n                            <h2 style=\"box-sizing: border-box; position: relative; margin: 0; font-weight: bold; margin-top: 0; font-size: 32px; padding: 60px 20px 30px; color: #002c3c; text-align: center; font-family: 'Philosopher', sans-serif; max-width: 607px; display: inline-block;\">\r\n                              Your Mentra Verification Code\r\n                            </h2>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%; padding-bottom: 35px;\">\r\n                            <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; display: inline-block; width: 100px;\" src=\"https://d1jdg.img.af.d.sendibt2.com/im/7405644/e564c203530dc2989516cda0340a91c585dfe6289a690c390e8052106e223651.png?e=9I15HF9X4R7lVPKtYrDrhzaEOuJqDY2Qq_dD_S65CW5DGeAreS4PVhW_IZCXUpLA3XIJMmiCS7ofuv-IJ7Cxfog7BmSb3XxRn17NxmGCGf2VE44mb0YjUMlgBp0Fj9jvZmy5tnWC3yiltf0kCFWjLIwS1KpaBloZPhDWy0erAKTn_dW_2DioBPBF0Ynqjt-7jZX1iGRJLHC4GYyxJTqSclLUgp6EmC7CHfLj7Ni6aOboYS6xeFUNg9hDJ11wsRCGVXkhJvcrZ5bA2no5_DSjWmiC04rBLutOahbJYFp72dBql23Q4Ihd\" alt=\"mail\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"content-sec\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; margin: 0 7%; padding: 30px 25px; background-color: #fff7e0; width: 85%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h2 class=\"philosopher\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; margin-top: 0; text-align: left; font-size: 20px; padding-bottom: 15px; font-family: 'Philosopher', sans-serif; color: #002c3c; font-weight: 700;\">\r\n                        \r\n                                Welcome to Mentra,User!\r\n                            </h2>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px; padding-top: 15px;\">\r\n                                            Here's your verification code to get started:\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px; padding-top: 20px;\">\r\n                                            <b style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\">CODE</b>: 2357 <i style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\">(Expires in 10 minutes from now)<i style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\"><br><br>\r\n                                        </i></i></p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px;\">\r\n                                            Simply enter this code in the app to verify your email and jump right into your new wellness journey.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; padding-top: 20px; font-size: 15px;\">\r\n                                            If you didn't request this, no worries—just ignore this email.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 30px;\">\r\n                                            Cheers to your journey ahead,\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 0px;\">\r\n                                            Mentra\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; margin-top: 40px;\">\r\n                    <tr>\r\n                        <td class=\"bottom-bd\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; height: 30px; width: 100%; background-color: #fff7e0;\"></td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</body>\r\n\r\n</html>\r\n\r\n"},{"payload":"<!doctype html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&amp;family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap\" rel=\"stylesheet\">\r\n    <title>Mentra Email</title>\r\n    <style>\r\n        /* @import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\"); */\r\n        body {\r\n            margin: 0;\r\n        }\r\n\r\n        table {\r\n            border-spacing: 0;\r\n        }\r\n\r\n        td {\r\n            padding: 0;\r\n        }\r\n\r\n        img {\r\n            border: 0;\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        p {\r\n            margin: 0;\r\n            padding: 0;\r\n            color: #002c3c;\r\n        }\r\n\r\n        .main-table {\r\n            width: 100%;\r\n            table-layout: fixed;\r\n            background-color: #f2f2ef;\r\n            max-width: 792px;\r\n            position: relative;\r\n        }\r\n\r\n        .top-bar {\r\n            width: 100%;\r\n            height: 113px;\r\n            background-color: #fff7e0;\r\n            position: relative;\r\n        }\r\n\r\n        .title {\r\n            margin: 0 auto;\r\n        }\r\n\r\n        .logo-cont {\r\n            width: 16%;\r\n            height: 16%;\r\n            position: absolute;\r\n            top: 10%;\r\n            left: 5%;\r\n            min-width: 85px;\r\n            transform: translateY(-50%);\r\n            display: inline-block;\r\n        }\r\n\r\n        .logo-cont img {\r\n            width: 100%;\r\n            height: 100%;\r\n            /* display: inline-block; */\r\n        }\r\n\r\n        .second-sec {\r\n            padding: 50px;\r\n            /* background: url(\"./images/rocks.png\");\r\n        background-size: cover; */\r\n            width: 100%;\r\n        }\r\n\r\n        .second-sec h2 {\r\n            font-size: 5em;\r\n            line-height: 90px;\r\n        }\r\n\r\n        .second-sec p {\r\n            font-size: 35px;\r\n        }\r\n\r\n        .content-sec {\r\n            margin: 0 7%;\r\n            padding: 30px 25px;\r\n            background-color: #fff7e0;\r\n            width: 85%;\r\n        }\r\n\r\n        .content-sec h2 {\r\n            font-size: 20px;\r\n            font-weight: 400;\r\n            padding-bottom: 15px;\r\n        }\r\n\r\n        .sub-head-img img {\r\n            width: 100px;\r\n        }\r\n\r\n        .sub-head-highlight {\r\n            background-color: #fae19d;\r\n            min-width: 270px;\r\n            width: 100%;\r\n            max-width: 500px;\r\n            height: fit-content;\r\n            min-height: 45px;\r\n            padding: 5px 30px 5px 0;\r\n            border-radius: 0 50% 50% 0;\r\n        }\r\n\r\n        .sub-head-highlight2 {\r\n            background-color: #fae19d;\r\n            width: 270px;\r\n            height: 40px;\r\n            border-radius: 50% 0 0 50%;\r\n        }\r\n\r\n        .sub-head-highlight h3 {\r\n            font-size: 17px;\r\n            padding-left: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .sub-head-highlight2 h3 {\r\n            font-size: 20px;\r\n            padding-right: 20px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .inline-el {\r\n            display: inline-block;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .inline-el2 {\r\n            display: inline;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .sub-head-info {\r\n            width: 100%;\r\n            max-width: 480px;\r\n        }\r\n\r\n        .sub-head-info p {\r\n            padding-top: 10px;\r\n            font-weight: 500;\r\n            word-spacing: 3px;\r\n        }\r\n\r\n        .connect_img_sec img {\r\n            display: inline-block;\r\n            height: 20px;\r\n            width: 20px;\r\n            vertical-align: bottom;\r\n        }\r\n\r\n        .bottom-bd {\r\n            height: 30px;\r\n            width: 100%;\r\n            background-color: #fff7e0;\r\n        }\r\n\r\n        .logoCont {\r\n            width: 15%;\r\n        }\r\n\r\n        .logoImg {\r\n            width: 100%;\r\n        }\r\n\r\n        @media only screen and (max-width: 768px) {\r\n            .logoCont {\r\n                width: 17%;\r\n                margin-left: 4%\r\n            }\r\n            .logoName {\r\n                margin-left: 20% !important;\r\n            }\r\n\r\n            .top-bar {\r\n                height: 80px !important;\r\n            }\r\n\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;\"><img width=\"1\" height=\"1\" src='https://heafgee.r.bh.d.sendibt3.com/tr/op/d8NrGXbRz5tuGKvm58G5cQ0LgQF1Ut1cQKY-0nn6gHMuDrPir8N1UeJqPw0yVAos8D-FlmE6-wqaEVZ-0ZOhZI9CgTE2IoFYfMydOeJjyWyjIa9WVXzxEauna-ewcvXJIh2DpZI1Nmz-v3mKMV6UVupl59ZyZQZrx69mdlJekV5ggulXSAzJBbXiB2I2AAvtzX7LP2ny48-OQd1h1ULutI71rQ' />\r\n    <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; table-layout: fixed; background-color: #f2f2ef; max-width: 792px; position: relative; margin: 0 auto;\" class=\"main-table\">\r\n        <tr>\r\n            <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                <table class=\"top-bar\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; border-spacing: 0; width: 100%; height: 113px; background-color: #fff7e0; position: relative;\">\r\n                    <tr>\r\n\r\n                        <td class=\"logoCont\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; width: 15%;\">\r\n                            <img class=\"logoImg\" src=\"https://d1jdg.img.bh.d.sendibt3.com/im/7405644/5753193a0b9bc3384584c0e95fa38596cb50c4c6e33cfe2d9b381d0018433ec6.png?e=sseT6nLfXY8GeY4jyOVCy4Pm4z8j7bJVw4QYtXgI8rO8ItYTZV0LxHRKKIrsuGBtaVKEIoPWOe58jjv-aZSUFG-6gmC4ASenMzXc2PvgdHx2ZMFBhOwP6EHkuCpuxv9gc5BOBp_UGTD18e8OCEJBtBa0eg0ivFRH0I_3QVa2cYFz9fyyLQI6LJNoJj47dXw2zfDvZX5LuH7vTAeU669rMNTxZ32iyMh_wuZEoT7nXWn7-XAHqfJo0aEA5OEmcvnaqo02Ql1CqLjtfChHi5przmsk5_HsLG4humk6s5kyABKRxw\" alt=\"Mentra\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; width: 100%;\">\r\n                        </td>\r\n\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h1 class=\"logoName\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; font-weight: bold; margin-top: 0; text-align: left; letter-spacing: 10px; margin-left: 30%; font-size: 22px; color: #002c3c; font-family: 'Philosopher', sans-serif;\">\r\n                                MENTRA\r\n                            </h1>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\"></td>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%;\">\r\n                            <h2 style=\"box-sizing: border-box; position: relative; margin: 0; font-weight: bold; margin-top: 0; font-size: 32px; padding: 60px 20px 30px; color: #002c3c; text-align: center; font-family: 'Philosopher', sans-serif; max-width: 607px; display: inline-block;\">\r\n                              Your Mentra Verification Code\r\n                            </h2>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; text-align: center; width: 100%; padding-bottom: 35px;\">\r\n                            <img style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border: 0; max-width: 100%; display: inline-block; width: 100px;\" src=\"https://d1jdg.img.bh.d.sendibt3.com/im/7405644/e564c203530dc2989516cda0340a91c585dfe6289a690c390e8052106e223651.png?e=Pur2hGHNqbESzemvt_PV8Z3kHN9-JJXYGuruE017laVIemXgQlaZ1QJsR1e1hKSxjZ8oKnHEOCmquzPItKmAkZKkVev2mtfvPrHPlKnua5dDHNArsTmN6NvUXSEkhpfHosIXxM27pjPG7mls9IGrSb3GOonFWr-Xi6BiTNVFISQl6eS5utUdTWwHorIBNaOHb3rTW1eZ7_NhddKCndTMI7AeU98t0Su_uSpWITlK93BZz9O58lley7GLFoa1aZU0k_sZ8h_inP-IKumV293WxSf6_5jRG_cYthfDyT2NzJq7sMc9HnQq\" alt=\"mail\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"content-sec\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; margin: 0 7%; padding: 30px 25px; background-color: #fff7e0; width: 85%;\">\r\n                    <tr>\r\n                        <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                            <h2 class=\"philosopher\" style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; margin-top: 0; text-align: left; font-size: 20px; padding-bottom: 15px; font-family: 'Philosopher', sans-serif; color: #002c3c; font-weight: 700;\">\r\n                        \r\n                                Welcome to Mentra,User!\r\n                            </h2>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px; padding-top: 15px;\">\r\n                                            Here's your verification code to get started:\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px; padding-top: 20px;\">\r\n                                            <b style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\">CODE</b>: 1440 <i style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\">(Expires in 10 minutes from now)<i style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;\"><br><br>\r\n                                        </i></i></p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; font-size: 15px;\">\r\n                                            Simply enter this code in the app to verify your email and jump right into your new wellness journey.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; text-align: left; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 23px; padding-top: 20px; font-size: 15px;\">\r\n                                            If you didn't request this, no worries—just ignore this email.\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 30px;\">\r\n                                            Cheers to your journey ahead,\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0;\">\r\n                                <tr>\r\n                                    <td style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;\">\r\n                                        <p style=\"box-sizing: border-box; position: relative; margin: 0; padding: 0; color: #002c3c; margin-top: 0; font-family: 'Philosopher', sans-serif; text-align: left; font-size: 15px; line-height: 25px; font-weight: 700; padding-top: 0px;\">\r\n                                            Mentra\r\n                                        </p>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-spacing: 0; width: 100%; margin-top: 40px;\">\r\n                    <tr>\r\n                        <td class=\"bottom-bd\" style=\"box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0; height: 30px; width: 100%; background-color: #fff7e0;\"></td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</body>\r\n\r\n</html>\r\n\r\n`;

  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  const getFileIcon = (fileName: string) => {
    const fileExtension = fileName.split(".").pop()?.toLowerCase();

    switch (fileExtension) {
      case "pdf":
        return <FaFilePdf className="text-red-500" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "bmp":
      case "svg":
        return <FaFileImage className="text-blue-500" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-700" />;
      case "xls":
      case "xlsx":
        return <FaFileExcel className="text-green-500" />;
      case "txt":
      case "md":
        return <FaFileAlt className="text-gray-500" />;
      case "mp4":
      case "mkv":
      case "mov":
      case "avi":
        return <FaFileVideo className="text-purple-500" />;
      case "mp3":
      case "wav":
      case "ogg":
        return <FaFileAudio className="text-orange-500" />;
      case "zip":
      case "rar":
      case "7z":
      case "tar":
      case "gz":
        return <FaFileArchive className="text-yellow-500" />;
      default:
        return <FaFile className="text-gray-400" />;
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [tableRows, setTableRows] = useState(rows);

  const openDialog = () => setIsOpen(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <main id="content">
        <div className="relative h-screen">
          <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
            <div className="text-center">
              <img
                src="LogoSVG.svg"
                alt="logo"
                className="w-20 h-20 mx-auto"
              ></img>

              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Ask anything to Maileyo
              </h1>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Your AI-powered copilot for the mails
              </p>
            </div>

            <ul className="mt-16 space-y-5">
              <li className="flex gap-x-2 sm:gap-x-4 ">
                <img
                  src="LogoSVG.svg"
                  alt=""
                  className="shrink-0   w-[38px] h-[38px]"
                />
                <Skeleton className="w-1/2 h-[128px]" />

                <div className="bg-white border w-1/2 border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis facilis quia autem dolorum officiis necessitatibus
                  minima nostrum deleniti accusantium aperiam. Necessitatibus
                  recusandae animi accusantium a architecto, exercitationem
                  eveniet harum ut.
                </div>
              </li>

              <li className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div className="grow text-end space-y-3">
                  <div className="inline-block bg-indigo-600 rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-white">
                      what's preline ui? Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Provident corporis iusto aliquam, eum
                      saepe accusamus hic mollitia totam doloribus, omnis ab
                      optio magni ipsa, et praesentium fuga aperiam delectus
                      voluptate?
                    </p>
                  </div>
                </div>

                <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                  <span className="text-sm font-medium text-white leading-none">
                    AZ
                  </span>
                </span>
              </li>

              <li className="flex gap-x-2 sm:gap-x-4">
                <img
                  src="LogoSVG.svg"
                  alt=""
                  className="shrink-0   w-[38px] h-[38px]"
                />
                 {/* <Skeleton className="w-1/2 h-[128px]" /> */}
                <div className="  w-1/2 space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                    <p className="text-sm text-gray-800 dark:text-white">
                      Hold on a sec...
                    </p>
                  </div>
                   

                  <div className="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                    <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div className="flex">
                                  <div>
                                    <img
                                      className="inline-block size-[38px] rounded-full mr-5"
                                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div>
                                    <span className="block text-sm font-semibold text-black dark:text-neutral-200">
                                      Christina Bersh
                                    </span>
                                    <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                      christina@site.com
                                    </span>
                                  </div>
                                </div>
                              </DialogTitle>

                              <div className="pt-5">
                                <div className="text-indigo-600 font-medium ">
                                  <TextGenerateEffect
                                    words={
                                      "hello my name is pranjal and i am ai generated"
                                    }
                                  />
                                  {/* <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Velit fugit inventore
                                    quidem accusantium nesciunt veniam ipsa!
                                    Incidunt eius consequuntur, perspiciatis
                                    ipsa aliquid est praesentium ea quasi facere
                                    dolorum cum. Labore.
                                  </p> */}
                                </div>
                              </div>
                              <Separator />
                              <p className="text-sm text-muted-foreground">
                                Enter your email address. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Corporis
                                pariatur voluptatum, consequatur dolorum illo
                                tempore numquam eum tenetur culpa! Sunt amet
                                neque architecto, ab aut inventore omnis
                                aperiam. Sequi, rem.
                              </p>
                            </DialogHeader>

                            <div className="overflow-auto max-h-[40vh]  scrollbar-hide smooth-scroll">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: sanitizedHTML,
                                }}
                              />

                              <div className="flex items-center gap-2 p-2  rounded shadow-sm hover:cursor-pointer">
                                <div className=" flex ">
                                  <div className="mt-1 mr-3">
                                    {getFileIcon("file.gz")}
                                  </div>
                                  <p className="text-red-500 font-semibold">
                                    file.pdf
                                  </p>
                                </div>
                              </div>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    See AI generated summary of thread
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    See AI generated summary of thread
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    See AI generated summary of thread
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </DialogContent>
                        </Dialog>
                        {/* </tbody>
                        </table> */}
                        
                        <CardStack items={tableRows} openDialog={openDialog} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="sm:flex sm:justify-between">
                      <div>
                        <div className="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700">
                          <button
                            type="button"
                            className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:bg-blue-100 focus:text-blue-800 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:bg-blue-900 dark:focus:text-blue-200"
                          >
                            <svg
                              className="shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:bg-blue-100 focus:text-blue-800 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:bg-blue-900 dark:focus:text-blue-200"
                          >
                            <svg
                              className="shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M17 14V2" />
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                            </svg>
                          </button>
                        </div>
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M17 14V2" />
                            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                          </svg>
                          Copy
                        </button>
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                          </svg>
                          Share
                        </button>
                      </div>

                      <div className="mt-1 sm:mt-0">
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          <svg
                            className="size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                            />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                          </svg>
                          New answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-neutral-900 dark:border-neutral-700">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </main>

      <div className="fixed bottom-2 sm:bottom-4 end-2 sm:end-4 ms-2 z-[70] bg-neutral-900 border border-neutral-800 rounded-lg dark:bg-neutral-800">
        <div className="flex items-center gap-px">
          <div className="hs-tooltip inline-block">
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-neutral-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-800"
              role="tooltip"
            >
              This is the Preline UI template preview mode.
            </span>
          </div>

          <div className="hs-dropdown relative inline-flex [--strategy:absolute] [--placement:bottom-right] before:absolute before:top-1/2 before:-start-px before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 overflow-hidden border border-neutral-800 bg-neutral-900 rounded-lg shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-preview"
            >
              <div className="max-h-[30rem] overflow-y-auto relative z-20 after:sticky after:inset-x-0 after:bottom-0 after:z-10 after:block after:w-full after:rounded-b-lg after:pointer-events-none after:bg-gradient-to-t after:from-neutral-900 after:via-neutral-900/95 dark:after:from-neutral-800 dark:after:via-neutral-800/95 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="p-1 space-y-0.5">
                  <span className="block p-2 pb-1 text-[11px] uppercase text-neutral-400 dark:text-neutral-400">
                    Main Pages
                  </span>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../index.html"
                  >
                    Preline UI
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../docs/index.html"
                  >
                    Components (595+)
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../examples.html"
                  >
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../templates.html"
                  >
                    Templates (5)
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../plugins.html"
                  >
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../figma.html"
                  >
                    Figma
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../pro/index.html"
                  >
                    Preline Pro
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <div className="border-b border-neutral-800 dark:border-neutral-700 pt-1"></div>
                  <span className="block p-2 pb-1 text-[11px] uppercase text-neutral-400 dark:text-neutral-400">
                    Template Previews
                  </span>

                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../templates/agency/index.html"
                  >
                    Agency
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../templates/personal/index.html"
                  >
                    Personal
                    <span className="text-green-400">New</span>
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../templates/creative-agency/index.html"
                  >
                    Creative Agency
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    href="../../templates/admin/index.html"
                  >
                    Admin
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 bg-neutral-800 dark:bg-neutral-700 "
                    href="../../templates/ai-prompt/ai-with-sidebar.html"
                  >
                    AI Prompt
                    <svg
                      className="shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
