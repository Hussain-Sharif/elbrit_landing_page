import { ReUseButton,ReUseDiv,ReUseImage,ReUseText } from "../../reusableStyles"
import { HeroBg, MainHeading ,SpecialBg} from "./styledComponents"



export const Hero=()=>(
    <HeroBg>
        <MainHeading>Essential Vitamins</MainHeading>
        <ReUseDiv border="none" mt="40px" w="100%" display="flex" fD="column" fDB="row" jC="space-between" aI="center">
            <ReUseDiv order="0" orderB="1" border="none" position="relative" w="auto" mb="10px" display="flex" fD="column" a jC="center" aI="flex-start" aS="center" aSB="flex-start">
                <SpecialBg>
                    <ReUseImage zIndex="2" position="relative" top="-80px" left="-50px" w="300px" mdW="480px" alt="probiotics" src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V21VVDmU7JxcRB76OOhoAt9ZJzhck8hR9U3L1UvokjwzK916BF2uOVElrkcxN5YP-si~qFGW9mXybipDrvdR9inQNdWLrDUUFadDcDwhwDJ4adJ0UfkwYRnZT-0b2Y9w29vguT4lAW1HMCi344hAaPojIhdUTUnuzzFnqR8X2VtFZXtBgZJYDWU5w5bRDHt1Nlxenbc59CkLE-RpPwl-8Wt6uz8rwl5~X6nDY-R0fyUzHYIp51B4LQF2W32WHBANFHGkAREYP66qtVWdYPpqIVAoba2zRrWozjVW~~unoMkhN0MSl-kap8oS2~IXt2HMzEYndt7tu2DsSbjQue1p9g__"/>
                </SpecialBg>
            </ReUseDiv>
            
            <ReUseDiv order="1" orderB="0" border="none" mb="40px" w="auto"  display="flex" fD="column" a jC="center" aI="flex-start" aS="flex-start" aSB="center">
                <ReUseText color="grey" as="p" mb="5px" fs="20px">Online Medical Supplies</ReUseText>
                <ReUseText color="#17414F" mb="5px" fw="bold" fs="30px">Get Your Vitamins & Minerals</ReUseText>
                <ReUseButton p="12px" mb="5px" fsB="16px" fs="12px" border="none" color="#fff" bg="#17414F" br="40px">EXPLORE</ReUseButton>
            </ReUseDiv>

            <ReUseDiv order="2" orderB="2" border="none" w="100%" wB="auto" display="flex" fD="column" a jC="center" aI="flex-start" aS="flex-start" aSB="center">
                <ReUseDiv display="flex" mb="20px" fD="row" jC="center" aI="flex-start">
                    <ReUseImage w="50px" alt="vitamins" src="https://s3-alpha-sig.figma.com/img/1d76/fc2a/470ec862c44115964979f90b5cb3a94e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8br3l5hvS1vnQy3WMDDXmvwBbAoZGBF~14OpoaLciq8S325-GN8~oF56m4ULopQlNJDHShbY78MmUGsjZKiZYOrAbdXVyr3HUSNpFdJtbKkVtYhvAUvHp6ghUpHNKNf2H0EhxgXQAdX5jDhFvmlnt6~wcvCWsUCjPhetY5usDdwSlgaddrZxhaKIuaDy8aQ9FqvG5MWZKQTnkBeWZlih89WfilN3Vkv0Iu6w2x8TmzehqQWS-GJFBXyOBMB1X-NSi2AkO4VTnN6MfPeNS-P8DlWm6JYTg4RHFY2CqAtNMenk5f9jmbl4lN-RE-Zn8XYlohyzBU~XMQB~2rnXotnfw__"/>
                    <ReUseDiv ml="12px">
                    <ReUseText color="#17414F" fw="bold" fs="30px" fsB="25px">Vitamins</ReUseText>
                    <ReUseText color="grey" as="p" fs="17px" fsB="13px">Increased Vitamins and <br/> Minerals in your diet</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>

                <ReUseDiv display="flex" mb="20px" fD="row" jC="center" aI="flex-start">
                    <ReUseImage w="50px" alt="weight-loss" src="https://s3-alpha-sig.figma.com/img/c0ae/6abf/9917c0af12dcc49a9c0130d3e68e04b1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dx9BsMA39Mxa2Odn8qXpjgqLgJyWy~dNaB6DWyuRYIcHKphjSwmcU7SAkxdZ7PI3POB9Uyzc7nMnVoElXMw8CgPzRcSmULQkpHMiGrYbDG~Q8DlnJE-hE3NelQMqZNZdOpuTPBcD2GN2o45uUYVUedoMKhr7BJjjq4Bn6KTkZ8kgzrpS0AEGU7GL1TEkF3n80lm8y4WXbhcWvQ3t7sDsmGyXpFYztMuybNF4rLHwuGcQ0GYWpRQa9~jb1uyEynJGetiEPYQmrQaagS2tvkDhCD0TZ~0YZqnSdYFqi3IGnBJH3YiIqdWxdwfe6MEQgJ~EpmW6GtjA0PRSMQBujKvDvg__"/>
                    <ReUseDiv ml="12px">
                    <ReUseText color="#17414F" fw="bold" fs="30px" fsB="25px">Weight Loss</ReUseText>
                    <ReUseText color="grey" as="p" fs="17px" fsB="13px">Weight Loss <br/>Find scientifically proven solutions</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>

                <ReUseDiv display="flex" fD="row" jC="center" aI="flex-start">
                    <ReUseImage w="50px" alt="functional-foods" src="https://s3-alpha-sig.figma.com/img/ad6c/6ad1/2116d12f8d75befd05e66d41425cb402?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWc~OffEuoFYOrTG-j6GYpo7NN-Y4O29eyv2w4PY1~ndA0~r8ZJogsmhFEggIbt7DOo2KwWhgGJdYo2RZL04W151-jnCLmEga1NVbZadhi07US-q8oBLAeJ~QkANDAPnzlpL2f4o89~21nLtKDEZYITd4HvG1YF80DhhYtubj05OA4f6hmeprvUIFnJ~MUPSU6ywuc63KZhOGnePDiNYC6wVcIODrgb73yX8-FwFmjTpn690lIb5n2U~-GfjI6I9rTCh950Vdy-UlQ7qO7hG4meji~V9EAGgSZ5HoUvIxN9zicR~Mi2mncb8ECgPKe10P04yn6HfTmecbXP5Ox9lTA__"/>
                    <ReUseDiv ml="12px">
                    <ReUseText color="#17414F" fw="bold" fs="30px" fsB="25px">Functional Foods</ReUseText>
                    <ReUseText color="grey" as="p" fs="17px" fsB="13px">Functional Foods <br/> From proven powers to baby  formula</ReUseText>
                    </ReUseDiv>
                </ReUseDiv>
            </ReUseDiv>
        </ReUseDiv>
    </HeroBg>
)