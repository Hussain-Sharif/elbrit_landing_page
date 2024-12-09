import { ReUseDiv, ReUseImage, ReUseText } from "../../reusableStyles";
import phoneIcon from '../../assets/telephone.png'
import emailIcon from '../../assets/email.png'
import locationIcon from '../../assets/location.png'
import locSmallIcon from '../../assets/r-icon.png'

export const Footer=()=>(
    <ReUseDiv w="100%" bg="#17414F" p="15px" display="flex" fD="column" jC="center" aI="center">
        <ReUseDiv w="85%" display="flex" fD="column" jC="flex-start" aI="center">
            <ReUseDiv order="1" orderB="0" mb="40px"  w="100%" display="flex" fD="column" fDB="row" fWB="wrap" jC="center" jCB="space-evenly" aI="center">
                <ReUseDiv pl="30px" minW="300px" bg="#215D72" br="18px" p="10px" mb="14px" display="flex" fD="row" jC="flex-start" aI="center">
                    <ReUseImage w="40px" h="40px" alt="footer-icon" src={phoneIcon}/>
                    <ReUseDiv ml="10px">
                        <ReUseText color="#fff">Phone Number <br/></ReUseText>
                        <ReUseText color="#fff">+974 3118 1843</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>
                
                <ReUseDiv pl="30px" minW="300px" bg="#215D72" br="18px" p="10px" mb="14px" display="flex" fD="row" jC="flex-start" aI="center">
                    <ReUseImage w="40px" h="40px" alt="footer-icon" src={emailIcon}/>
                    <ReUseDiv ml="10px">
                        <ReUseText color="#fff">Email Address <br/></ReUseText>
                        <ReUseText color="#fff">Elbrithcqhr@gmail.com</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>

                <ReUseDiv pl="30px" minW="300px" bg="#215D72" br="18px" p="10px" mb="14px" display="flex" fD="row" jC="flex-start" aI="center">
                    <ReUseImage w="40px" h="40px" alt="footer-icon" src={locationIcon}/>
                    <ReUseDiv ml="10px">
                        <ReUseText color="#fff">Office Location<br/></ReUseText>
                        <ReUseText color="#fff"> Ambassador Street, Zone 61,</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>
            </ReUseDiv>

            <ReUseDiv  order="0" orderB="1" w="100%" display="flex" fD="column" fDB="row" jC="center" jCB="flex-start" aI="flex-start" mb="50px">
                <ReUseDiv bg="#fff" p="5px" maxW="340px" mb="20px">
                    <ReUseImage alt="logo" src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0spKcLnDj3-RGpQBgOl4A15XyrTvF-baao9zqhB1Sbc4h8fV0bqAxcS7zgqS2FsjV7o9OxvALHkXRRbgFT3Xp~6PeUjIn~ISRuX16EbEaLdhXEEpKqHxhzNSpqyeJcazv-C-0Fk4L2YhBx966luC0vI7UTh0tfPGFeD0sMakYF2KogtEA3m~mfkw7wOehPZa3kvbcF7t0T~HrGgOXynC6TglKELsRGlVz95fjwecpdCjr99eGIDVFD61c8UYKTCPShu1wAmLXrhq0ps1APbdyq0Vm16-DHw5sjSFHRHiAsWAAmMCJRJFA5-H9-AXr9MVi1H-zb2wDFoRz3KoK0wsQ__"/>
                </ReUseDiv>
                <ReUseDiv  mlB="80px" maxW="380px" w="100%">
                    <ReUseText color="#fff">Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</ReUseText>
                </ReUseDiv>
            </ReUseDiv>

            <ReUseDiv order="2" w="100%">
                <ReUseImage w="14px" h="14px" alt="footer-icon" src={locSmallIcon}/>
                <ReUseText color="#fff">
                Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
                </ReUseText>
            </ReUseDiv>
        </ReUseDiv>
    </ReUseDiv>
)