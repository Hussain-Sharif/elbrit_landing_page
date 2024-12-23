import { ReUseButton,ReUseDiv,ReUseImage,ReUseText } from "../../reusableStyles"
import { HeroBg, HeroCoverBg, HeroImage, MainHeading ,SpecialBg} from "./styledComponents"
import clinicalIcon from '../../assets/clinical.png'
import vegIcon from '../../assets/veg.png'
import madeIcon from '../../assets/made.png'
import freeIcon from '../../assets/free.png'
import gmoIcon from '../../assets/gno.png'
import noriskIcon from '../../assets/no_risk.png'




export const Hero=()=>(
    <ReUseDiv display="flex" fD="column" jC="center" aI="center" p="20px">
    {/* <> */}
    <HeroBg>
        <MainHeading>Essential Vitamins</MainHeading>
        <HeroCoverBg border="none" mt="40px" w="100%" display="flex" fD="column" jC="space-between" aI="center">
            <ReUseDiv className="imageDiv" order="0"  border="none" position="relative" w="auto" mb="10px" display="flex" fD="column"   jC="center" aI="flex-start" aS="center" >
                <SpecialBg>
                    <HeroImage zIndex="2" position="relative" top="-80px" left="-50px" w="300px" mdW="480px" alt="probiotics" src="src/assets/tablet_bottle.png"/>
                </SpecialBg>
            </ReUseDiv>
            
            <ReUseDiv className="textDiv" order="1" orderB="" border="none" mb="40px" w="auto"  display="flex" fD="column"  jC="center" aI="flex-start" aS="flex-start">
                <ReUseText color="#727272" as="p" mb="5px" fs="20px">Online Medical Supplies</ReUseText>
                <ReUseText color="#17414F" mb="5px" fw="bold" fs="30px">Get Your Vitamins & Minerals</ReUseText>
                <ReUseButton p="12px" mb="5px" fsB="16px" fs="12px" border="none" color="#fff" bg="#17414F" br="40px">EXPLORE</ReUseButton>
            </ReUseDiv>

            <ReUseDiv className="pointsDiv" order="2" orderB="" border="none" w="100%" wB="auto" display="flex" fD="column" fDB="row"  jC="center" aI="flex-start" aS="flex-start" aSB="center">
                <ReUseDiv display="flex" mlB="15px" mb="20px" fD="row" jC="center" aI="flex-start">
                    <ReUseImage w="58px" alt="vitamins" src="src/assets/hero-1.png"/>
                    <ReUseDiv ml="12px">
                    <ReUseText color="#17414F" fw="bold" fs="30px" fsB="25px">Vitamins</ReUseText>
                    <ReUseText color="#727272" as="p" fs="17px" fsB="13px">Increased Vitamins and <br/> Minerals in your diet</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>

                <ReUseDiv display="flex" mlB="15px" mb="20px" fD="row" jC="center" aI="flex-start">
                    <ReUseImage w="58px" alt="weight-loss" src="src/assets/hero-2.png"/>
                    <ReUseDiv ml="12px">
                    <ReUseText color="#17414F" fw="bold" fs="30px" fsB="25px">Weight Loss</ReUseText>
                    <ReUseText color="#727272" as="p" fs="17px" fsB="13px">Weight Loss <br/>Find scientifically proven solutions</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>

                <ReUseDiv  display="flex" fD="row" jC="center" aI="flex-start">
                    <ReUseImage w="58px" alt="functional-foods" src="src/assets/hero-3.png"/>
                    <ReUseDiv ml="12px">
                    <ReUseText color="#17414F" fw="bold" fs="30px" fsB="25px">Functional Foods</ReUseText>
                    <ReUseText color="#727272" as="p" fs="17px" fsB="13px">Functional Foods <br/> From proven powers to baby  formula</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>
            </ReUseDiv>
        </HeroCoverBg>  
    </HeroBg>
    <ReUseDiv aS="center" mt="30px" top="-70px" fW="wrap" display="flex" fD="column" jC="center" aI="center" fDB="row"  p="15px" pb="0px" border="none" position="relative" br="25px" w="85%" bg="#17414F" >
        <ReUseDiv border="none" m="10px" mb="5px"  position="relative" w="100%" wB="20%" left="0px" topB="-65px" display="flex" fD="row" fDB="column" jC="flex-start" aI="center">
                <ReUseDiv>
                    <ReUseImage w="60px" h="60px" mdW="90px" mdH="90px" alt="clinical" src={clinicalIcon}/>
                </ReUseDiv>
            <ReUseDiv ml="10px" display="flex" fD="column" jC="center" aI="flex-start" aIB="center">
                <ReUseText color="white" fW="bold" as="h3">Clinically Studied</ReUseText>
                <ReUseText tAlignB="center"  color="#d9d9d9" fW="normal" as="p" fs="13px">All products that we offer have undergone lab and safety tests</ReUseText>
            </ReUseDiv>
        </ReUseDiv>
        <ReUseDiv border="none" m="10px" mb="5px" position="relative" w="100%" wB="20%" left="0px" topB="-65px" display="flex" fD="row" fDB="column" jC="flex-start" aI="center">
                <ReUseDiv>
                    <ReUseImage w="60px" h="60px" mdW="90px" mdH="90px" alt="clinical" src={vegIcon}/>
                </ReUseDiv>
            <ReUseDiv ml="10px" display="flex" fD="column" jC="center" aI="flex-start" aIB="center">
                <ReUseText color="white" fW="bold" as="h3">Vegetarian Friendly</ReUseText>
                <ReUseText tAlignB="center"  color="#d9d9d9" fW="normal" as="p" fs="13px">We have a wide selection of vegetarian products to meet your needs</ReUseText>
            </ReUseDiv>
        </ReUseDiv>
        <ReUseDiv border="none" m="10px" mb="5px" position="relative" w="100%" wB="20%" left="0px" topB="-65px" display="flex" fD="row" fDB="column" jC="flex-start" aI="center">
                <ReUseDiv>
                    <ReUseImage w="60px" h="60px" mdW="90px" mdH="90px" alt="clinical" src={madeIcon}/>
                </ReUseDiv>
            <ReUseDiv ml="10px" display="flex" fD="column" jC="center" aI="flex-start" aIB="center">
                <ReUseText color="white" fW="bold" as="h3">Made in India</ReUseText>
                <ReUseText tAlignB="center"  color="#d9d9d9" fW="normal" as="p" fs="13px">Shop local and explore health products made right here in India</ReUseText>
            </ReUseDiv>
        </ReUseDiv>
        <ReUseDiv border="none" m="10px" mb="5px" mbB="0" position="relative" w="100%" wB="20%" left="0px" topB="-65px" display="flex" fD="row" fDB="column" jC="flex-start" aI="center">
                <ReUseDiv>
                    <ReUseImage w="60px" h="60px" mdW="90px" mdH="90px" alt="clinical" src={freeIcon}/>
                </ReUseDiv>
            <ReUseDiv ml="10px" display="flex" fD="column" jC="center" aI="flex-start" aIB="center">
                <ReUseText color="white" fW="bold" as="h3">Free shipping</ReUseText>
                <ReUseText tAlignB="center"  color="#d9d9d9" fW="normal" as="p" fs="13px">We deliver to your door with no shipping costs on your orders</ReUseText>
            </ReUseDiv>
        </ReUseDiv>
        <ReUseDiv border="none" m="10px" mb="5px" mbB="0" position="relative" w="100%" wB="20%" left="0px" topB="-65px" display="flex" fD="row" fDB="column" jC="flex-start" aI="center">
                <ReUseDiv>
                    <ReUseImage w="60px" h="60px" mdW="90px" mdH="90px" alt="clinical" src={noriskIcon}/>
                </ReUseDiv>
            <ReUseDiv ml="10px" display="flex" fD="column" jC="center" aI="flex-start" aIB="center">
                <ReUseText color="white" fW="bold" as="h3">No Risk</ReUseText>
                <ReUseText tAlignB="center"  color="#d9d9d9" fW="normal" as="p" fs="13px">We ensure that all products are safe and within their use-by date</ReUseText>
            </ReUseDiv>
        </ReUseDiv>
        <ReUseDiv border="none" m="10px" mb="5px" mbB="0" position="relative" w="100%" wB="20%" left="0px" topB="-65px" display="flex" fD="row" fDB="column" jC="flex-start" aI="center">
                <ReUseDiv>
                    <ReUseImage w="60px" h="60px" mdW="90px" mdH="90px" alt="clinical" src={gmoIcon}/>
                </ReUseDiv>
            <ReUseDiv ml="10px" display="flex" fD="column" jC="center" aI="flex-start" aIB="center">
                <ReUseText color="white" fW="bold" as="h3">GMO Free</ReUseText>
                <ReUseText tAlignB="center"  color="#d9d9d9" fW="normal" as="p" fs="13px">Natural, no modified products and derivatives for those who need it</ReUseText>
            </ReUseDiv>
        </ReUseDiv>
    </ReUseDiv>
    {/* </> */}
    </ReUseDiv>
)