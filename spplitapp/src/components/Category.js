import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import * as Font from 'expo-font';
import axios from 'axios';
import Search from '../components/Search';
import { cardList } from './CardList';

// const home = require('../assets/images/home_icon.png')
// const bookmark = require('../assets/images/bookmark_icon.png')
// const coffee = require('../assets/images/coffee_icon.png')
// const book = require('../assets/images/book_icon.png')

const TotalContainer = styled.View `
    width : 100%;
    height : 100%;
`;

const CategoryContainer = styled.View `
    z-index : 100;
    position: absolute;
    width: 100%;
    height: 90px;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

const Categorybar = styled.View `
    position: absolute;
    background-color: white;
    box-shadow: 4px 4px 10px rgba(17, 17, 26, 0.25);
    width: 90%;
    height: 60px;
    bottom: 30px;
    border-radius: 60px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

// const CategoryIconContainer = styled.View`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
// `;

// const CategoryIcon = styled.Image`
//     width: 23px;
//     height: 23px;
// `;

// const CategoryIconList = [home, bookmark, coffee, book]

const CategoryTextContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width : 25%;
`;

const CategoryText = styled.Text`
    text-align : center;
    border: none;
    ${({ active }) =>
        active &&
        css`
          background-color: #4672AF;
          &:hover {
            background: #4672AF;
          }
        `}

`;



export default function Category({ cardList }) {

    // const [categoryList, setCategoryList] = useState([]);
    // const [categoryBar, setCategoryBar] = useState([]);

    const [clicked, setClicked] = useState(0);

    // // 토큰 획득
    // USER_TOKEN = "d956ff93cd9912ce04966deef265679dadbfda4b"
    // const AuthStr = "Token ".concat(USER_TOKEN)
    

    // USER_TOKEN = "5e8adbc6fcc6c326b12b30aa2726e0f5f1d0c272"
    // const AuthStr = "Token ".concat(USER_TOKEN)

    // useEffect(() => {
    //     const url = "http://127.0.0.1:3000/user/division"
    //     axios.get(url, { headers : { Authorization: AuthStr} })
    //     .then(function(response) {
    //         console.log("plz")
    //     })
    //     .catch(function(error) {
    //        console.log(error);
    //     })
    // }, [])

    // // 유저별 custom 카테고리 획득
    // useEffect(() => {
    //     const url = "https://spplit.herokuapp.com/user/category";
    //     axios.get(url, { headers : { Authorization: AuthStr} })
    //     .then(function(response) {
    //         setCategoryList(response.data);
    //         console.log("Category loading success");

    //         const category_dict = {}
    //         const categories = [];
            
    //         category_dict["category1"] = categoryList[0].category1
    //         category_dict["category2"] = categoryList[0].category2
    //         category_dict["category3"] = categoryList[0].category3
    //         category_dict["category4"] = categoryList[0].category4
    //         category_dict["category5"] = categoryList[0].category5
    //         category_dict["category6"] = categoryList[0].category6
    //         category_dict["category7"] = categoryList[0].category7
    //         category_dict["category8"] = categoryList[0].category8
    //         category_dict["category9"] = categoryList[0].category9
    //         category_dict["category10"] = categoryList[0].category10

    //         for (var key in category_dict) {
    //             if (category_dict.hasOwnProperty(key)) {
    //                 categories.push(category_dict[key]);
    //             }
    //         }  
    //         setCategoryBar(categories)
    //     })
    //     .catch(function(error) {
    //         console.log("Category loading failure");
    //     })
    // }, [])

    // const buttonList = categoryBar.slice(0,4).map((value, index) => {
    //     return (
    //         <CategoryTextContainer>
    //             <CategoryText key={index} active={clicked === index} onPress={() => setClicked(index)}>{value}</CategoryText>
    //         </CategoryTextContainer>
    //     )
    // })

    const categoryBar = [
        {
            "id": 1,
            "category1": "All",
            "is_checked_category1": true,
            "category2": "Bookmark",
            "is_checked_category2": true,
            "category3": "Work",
            "is_checked_category3": true,
            "category4": "Teams",
            "is_checked_category4": true,
            "category5": "Sport",
            "is_checked_category5": false,
            "category6": "Group",
            "is_checked_category6": false,
            "category7": "Other",
            "is_checked_category7": false,
            "user": 23
        }
    ]
    const categoryCheckedList = []

    if (categoryBar[0].is_checked_category1) {
        categoryCheckedList.push(categoryBar[0].category1)
    }

    if (categoryBar[0].is_checked_category2) {
        categoryCheckedList.push(categoryBar[0].category2)
    }

    if (categoryBar[0].is_checked_category3) {
        categoryCheckedList.push(categoryBar[0].category3)
    }

    if (categoryBar[0].is_checked_category4) {
        categoryCheckedList.push(categoryBar[0].category4)
    }

    if (categoryBar[0].is_checked_category5) {
        categoryCheckedList.push(categoryBar[0].category5)
    }

    if (categoryBar[0].is_checked_category6) {
        categoryCheckedList.push(categoryBar[0].category6)
    }

    if (categoryBar[0].is_checked_category7) {
        categoryCheckedList.push(categoryBar[0].category7)
    }

    console.log(categoryCheckedList)

    const buttonList = categoryCheckedList.map((value, index) => {
        return (
            <CategoryTextContainer>
                <CategoryText key={index} active={clicked === index} onPress={() => setClicked(index)}>{value}</CategoryText>
            </CategoryTextContainer>
        )
    })


    const cards = cardList.filter((card)=> {
        console.log(clicked)
        // All 띄우기
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[0])) {
            return card
        }
        // Bookmark 띄우기
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[1]) && card.isBookmarked === true) {
            return card
        }
        // 카테고리별 필터
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[2]) && categoryCheckedList[2].toLowerCase() === card.division.toLowerCase()) {
            return card
        }
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[3]) && categoryCheckedList[3].toLowerCase() === card.division.toLowerCase()) {
            return card
        }
    })


    return (
        <TotalContainer>
            <Search cards={cards} />
            <CategoryContainer>
                <Categorybar>
                    {buttonList}
                </Categorybar>
            </CategoryContainer>
         </TotalContainer>
    )
}
