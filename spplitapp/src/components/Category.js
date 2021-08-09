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

    const [categoryList, setCategoryList] = useState([]);
    const [categoryBar, setCategoryBar] = useState([]);

    const [clicked, setClicked] = useState(0);

    // 토큰 획득
    USER_TOKEN = "d956ff93cd9912ce04966deef265679dadbfda4b"
    const AuthStr = "Token ".concat(USER_TOKEN)

    // 유저별 custom 카테고리 획득
    useEffect(() => {
        const url = "https://spplit.herokuapp.com/user/category";
        axios.get(url, { headers : { Authorization: AuthStr} })
        .then(function(response) {
            setCategoryList(response.data);
            console.log("Category loading success");

            const category_dict = {}
            const categories = [];
            
            category_dict["category1"] = categoryList[0].category1
            category_dict["category2"] = categoryList[0].category2
            category_dict["category3"] = categoryList[0].category3
            category_dict["category4"] = categoryList[0].category4
            category_dict["category5"] = categoryList[0].category5
            category_dict["category6"] = categoryList[0].category6
            category_dict["category7"] = categoryList[0].category7
            category_dict["category8"] = categoryList[0].category8
            category_dict["category9"] = categoryList[0].category9
            category_dict["category10"] = categoryList[0].category10

            for (var key in category_dict) {
                if (category_dict.hasOwnProperty(key)) {
                    categories.push(category_dict[key]);
                }
            }  
            setCategoryBar(categories)
        })
        .catch(function(error) {
            console.log("Category loading failure");
        })
    }, [])

    const buttonList = categoryBar.slice(0,4).map((value, index) => {
        return (
            <CategoryTextContainer>
                <CategoryText key={index} active={clicked === index} onPress={() => setClicked(index)}>{value}</CategoryText>
            </CategoryTextContainer>
        )
    })




    const cards = cardList.filter((card)=> {
        console.log(clicked)
        // All 띄우기
        if (clicked === categoryBar.indexOf("All")) {
            return card
        }
        // Bookmark 띄우기
        if (clicked === categoryBar.indexOf("Bookmark") && card.isBookmarked === true) {
            return card
        }
        // 카테고리별 필터
        if (clicked === categoryBar.indexOf(categoryBar[2]) && categoryBar[2].toLowerCase() === card.division.toLowerCase()) {
            return card
        }
        if (clicked === categoryBar.indexOf(categoryBar[3]) && categoryBar[3].toLowerCase() === card.division.toLowerCase()) {
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
