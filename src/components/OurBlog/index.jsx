import { ReUseDiv ,ReUseText} from "../../reusableStyles";
import { DateTag, Item, Masonry } from "./styledComponents";


export const OurBlog=()=>(
    <ReUseDiv w="100%" display="flex" fD="column" jC="center" aI="center">
        <ReUseDiv w="80%" mt="25px">
            <ReUseDiv w="100%" display="flex" fD="column" jC="flex-start" aI="center">
                <ReUseText fs="15px" fw="bolder" color="#003569">OUR BLOG</ReUseText>
                <ReUseText fs="30px" fw="bold" color="#17414F">Latest News</ReUseText>
            </ReUseDiv>
            <Masonry w="100%" mt="35px">
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H93gFY~1gUwXkysy0T1Nehog7vVKi~rY3eqF2RYL8~wljB6e-ZC97ICaNDm~pt~mPSRTAoBD365zUCbru9CO9NwzTdagFor1~U5Y6C7CzjPI~hyvtmr4ZHUnzDUNOHL8wXF-q64J9-DkiwPJyrUA9DlK3qoUxkLvKJ3LcooTbBzhODsmogg8OH3ERMyuPGnimcvgXp0Rg2qE2A3SOlYeMe1XQufyxuO4FizyfkQOeXGZLWaxwR0knUdStpogBfIw30pBAdMuO6C-fXagl9X9yEjq356rM3YOv96duoVRXZnYo0Bx8UIAnDDYQuecfLfJBWB-5~HE-A~0PyyBbWK1Dg__">
                    <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOpCkE9SFeW7vNlOr8ueRiEu2Le3BBA4Hdt3LXConppv~ponV2vFOwelZrkUd7nVwRnQtu0foUtFH-kYaczcGedT3djwqblFA5JuminqE-pxzeVt5wlk1Ve2-FQ-YgezCHKpvEar0CTu-g0r9-eE4VDFV1kAdPnlksrPSZciAdhUPXmSNMQHLTlruWKj0MpFO~wiB-wCO9L1BVySNMcJc1d39iQe-KD5zzDME7r3mDjwxETPkVdq1QAWTbmk~zVkZeZhygFxnYpWAmaRmaRMJqaSSArqC0WOLpVqdLST-9JoBw8KJZWCX-mS7EchzR1zfyJ2U8u-W87yrxDxNfz4dw__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2023 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H93gFY~1gUwXkysy0T1Nehog7vVKi~rY3eqF2RYL8~wljB6e-ZC97ICaNDm~pt~mPSRTAoBD365zUCbru9CO9NwzTdagFor1~U5Y6C7CzjPI~hyvtmr4ZHUnzDUNOHL8wXF-q64J9-DkiwPJyrUA9DlK3qoUxkLvKJ3LcooTbBzhODsmogg8OH3ERMyuPGnimcvgXp0Rg2qE2A3SOlYeMe1XQufyxuO4FizyfkQOeXGZLWaxwR0knUdStpogBfIw30pBAdMuO6C-fXagl9X9yEjq356rM3YOv96duoVRXZnYo0Bx8UIAnDDYQuecfLfJBWB-5~HE-A~0PyyBbWK1Dg__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px"  br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOpCkE9SFeW7vNlOr8ueRiEu2Le3BBA4Hdt3LXConppv~ponV2vFOwelZrkUd7nVwRnQtu0foUtFH-kYaczcGedT3djwqblFA5JuminqE-pxzeVt5wlk1Ve2-FQ-YgezCHKpvEar0CTu-g0r9-eE4VDFV1kAdPnlksrPSZciAdhUPXmSNMQHLTlruWKj0MpFO~wiB-wCO9L1BVySNMcJc1d39iQe-KD5zzDME7r3mDjwxETPkVdq1QAWTbmk~zVkZeZhygFxnYpWAmaRmaRMJqaSSArqC0WOLpVqdLST-9JoBw8KJZWCX-mS7EchzR1zfyJ2U8u-W87yrxDxNfz4dw__">
                    <ReUseText color="#fff" position="relative" top="60px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H93gFY~1gUwXkysy0T1Nehog7vVKi~rY3eqF2RYL8~wljB6e-ZC97ICaNDm~pt~mPSRTAoBD365zUCbru9CO9NwzTdagFor1~U5Y6C7CzjPI~hyvtmr4ZHUnzDUNOHL8wXF-q64J9-DkiwPJyrUA9DlK3qoUxkLvKJ3LcooTbBzhODsmogg8OH3ERMyuPGnimcvgXp0Rg2qE2A3SOlYeMe1XQufyxuO4FizyfkQOeXGZLWaxwR0knUdStpogBfIw30pBAdMuO6C-fXagl9X9yEjq356rM3YOv96duoVRXZnYo0Bx8UIAnDDYQuecfLfJBWB-5~HE-A~0PyyBbWK1Dg__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item  minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOpCkE9SFeW7vNlOr8ueRiEu2Le3BBA4Hdt3LXConppv~ponV2vFOwelZrkUd7nVwRnQtu0foUtFH-kYaczcGedT3djwqblFA5JuminqE-pxzeVt5wlk1Ve2-FQ-YgezCHKpvEar0CTu-g0r9-eE4VDFV1kAdPnlksrPSZciAdhUPXmSNMQHLTlruWKj0MpFO~wiB-wCO9L1BVySNMcJc1d39iQe-KD5zzDME7r3mDjwxETPkVdq1QAWTbmk~zVkZeZhygFxnYpWAmaRmaRMJqaSSArqC0WOLpVqdLST-9JoBw8KJZWCX-mS7EchzR1zfyJ2U8u-W87yrxDxNfz4dw__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2023 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px"  br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H93gFY~1gUwXkysy0T1Nehog7vVKi~rY3eqF2RYL8~wljB6e-ZC97ICaNDm~pt~mPSRTAoBD365zUCbru9CO9NwzTdagFor1~U5Y6C7CzjPI~hyvtmr4ZHUnzDUNOHL8wXF-q64J9-DkiwPJyrUA9DlK3qoUxkLvKJ3LcooTbBzhODsmogg8OH3ERMyuPGnimcvgXp0Rg2qE2A3SOlYeMe1XQufyxuO4FizyfkQOeXGZLWaxwR0knUdStpogBfIw30pBAdMuO6C-fXagl9X9yEjq356rM3YOv96duoVRXZnYo0Bx8UIAnDDYQuecfLfJBWB-5~HE-A~0PyyBbWK1Dg__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOpCkE9SFeW7vNlOr8ueRiEu2Le3BBA4Hdt3LXConppv~ponV2vFOwelZrkUd7nVwRnQtu0foUtFH-kYaczcGedT3djwqblFA5JuminqE-pxzeVt5wlk1Ve2-FQ-YgezCHKpvEar0CTu-g0r9-eE4VDFV1kAdPnlksrPSZciAdhUPXmSNMQHLTlruWKj0MpFO~wiB-wCO9L1BVySNMcJc1d39iQe-KD5zzDME7r3mDjwxETPkVdq1QAWTbmk~zVkZeZhygFxnYpWAmaRmaRMJqaSSArqC0WOLpVqdLST-9JoBw8KJZWCX-mS7EchzR1zfyJ2U8u-W87yrxDxNfz4dw__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        17 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">Hac hendrerit mus nons semper <br/> suspendisse</ReUseText>
                </Item>
            </Masonry>

        </ReUseDiv>
    </ReUseDiv>
)