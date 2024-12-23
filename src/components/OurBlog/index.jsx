import { ReUseDiv ,ReUseText} from "../../reusableStyles";
import { DateTag, Item, Masonry } from "./styledComponents";


export const OurBlog=()=>(
    <ReUseDiv w="100%" display="flex" fD="column" jC="center" aI="center">
        <ReUseDiv w="85%" mt="25px" >
            <ReUseDiv w="100%"  display="flex" fD="column" jC="flex-start" aI="center">
                <ReUseText fs="15px" fw="bolder" color="#003569">OUR BLOG</ReUseText>
                <ReUseText fs="30px" fw="bold" color="#17414F">Latest News</ReUseText>
            </ReUseDiv>
            <Masonry w="100%"  mt="35px">
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="src/assets/news-1.jpeg">
                    <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="src/assets/news-2.jpeg">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2023 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="src/assets/news-1.jpeg">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px"  br="16px" bgSize="cover" bgImgUrl="src/assets/news-2.jpeg">
                    <ReUseText color="#fff" position="relative" top="60px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="src/assets/news-1.jpeg">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item  minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="src/assets/news-2.jpeg">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2023 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px"  br="16px" bgSize="cover" bgImgUrl="src/assets/news-1.jpeg">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="src/assets/news-2.jpeg">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        17 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">Hac hendrerit mus nons semper <br/> suspendisse</ReUseText>
                </Item>
            </Masonry>

        </ReUseDiv>
    </ReUseDiv>
)