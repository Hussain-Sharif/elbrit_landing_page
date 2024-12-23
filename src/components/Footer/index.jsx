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
                    <ReUseImage alt="logo" src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWFlSlym8kDaIbBc9MNzir7xrMAIi4VKaQwsdwO3y2HM4a66EVVacN1KRZ2bPNm~N20CJB4E83mZckIGaTbIfM4jtBStDOaTi0G-I9UH0N-fIZ~LhvgcYWunzAH0hX472NV1r1BaAZ5eHTzpV7tWc797GtmbO6RWwk9UfTi3Gra2mSnvXpYC12Sn~HrQu7RLPuVAYv3ZaARynIIbcc3XHE844EzBNgE365aVtk3q3gajluOPTC2ihw2OqlO1d2GG30XDpUeTz4vcc4Dndu-ngJuo5mSitmmQ4aufPtmLBn77IzeaAApCkn5c5260LtY~5BF4YoGW9L0NCkcCmTcL6g__"/>
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