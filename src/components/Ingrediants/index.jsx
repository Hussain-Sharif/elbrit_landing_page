import { ReUseButton, ReUseDiv, ReUseImage, ReUseText } from "../../reusableStyles";


export const Ingrediants=()=>(
    <ReUseDiv w="100%" display="flex" fD="column" jC="center" aI="center">
        <ReUseDiv w="85%"  display="flex" fD="row" fW="wrap" jC="space-between" aI="flex-start">
            <ReUseDiv m="15px 1px"  minW="300px" maxW="540px" display="flex" fD="row"  jC="space-between" aI="flex-start">
                <ReUseDiv w="100%" wB="100%" maxW="380px" display="flex" fD="column" jC="flex-start" aI="flex-start"> 
                    <ReUseText fs="15px" fw="bolder" color="#003569">INGREDIENTS</ReUseText>
                    <ReUseText fs="38px" fw="bold" color="#17414F">Better Ingredients</ReUseText>
                    <ReUseText fs="12px" color="#727272">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </ReUseText>
                </ReUseDiv>
                <ReUseDiv  display="block" displayB="none" w="35%"  h="100%"  maxW="80px">
                    <ReUseImage alt="art-image" h="100%"src="src/assets/ingredients-6.jpeg"/>
                </ReUseDiv>
            </ReUseDiv>
            
            <ReUseDiv m="15px 0px" minW="320px" minH="220px" w="100%" wB="auto" maxW="540px" display="flex" aS="center" fD="column" jC="space-between" aI="flex-start" p="15px" bgSize="cover" br="16px" bgImgUrl="src/assets/ingredients-1.png" >
                <ReUseDiv>
                    <ReUseText color="#2D3F59" fs="24px" fw="bold">Vitamin C <br/></ReUseText>
                    <ReUseText Color="#727272" fs="15px" fw="bold">Vitamin C as ascrobic acid</ReUseText>
                </ReUseDiv>
                <ReUseButton color="#003569" fw="bold" tD="underline" border="none"  bg="transparent" >SEE MORE</ReUseButton>
            </ReUseDiv>

            <ReUseDiv m="15px 0px"  minW="320px" minH="220px" w="100%" wB="auto" maxW="540px" display="flex" aS="center" fD="column" jC="space-between" aI="flex-start" p="15px" bgSize="cover" br="16px" bgImgUrl="src/assets/ingredients-2.jpeg" >
                <ReUseDiv>
                    <ReUseText color="#2D3F59" fs="24px" fw="bold">Vitamin B3 <br/></ReUseText>
                    <ReUseText Color="#727272" fs="15px" fw="bold">Niacin for healthy gut and skin</ReUseText>
                </ReUseDiv>
                <ReUseButton color="#003569" fw="bold" tD="underline" border="none"  bg="transparent" >SEE MORE</ReUseButton>
            </ReUseDiv>
            
            <ReUseDiv m="15px 0px" minW="320px" minH="220px" w="100%" wB="auto" maxW="540px" display="flex" fD="column" jC="space-between" aI="flex-start" p="15px" bgSize="cover" br="16px" bgImgUrl="src/assets/ingredients-3.jpeg" >
                <ReUseDiv>
                    <ReUseText color="#2D3F59" fs="24px" fw="bold">Magnesium<br/></ReUseText>
                    <ReUseText Color="#727272" fs="15px" fw="bold">Boost energy and support muscle function</ReUseText>
                </ReUseDiv>
                <ReUseButton color="#003569" fw="bold" tD="underline" border="none"  bg="transparent" >SEE MORE</ReUseButton>
            </ReUseDiv>

            <ReUseDiv m="15px 0px" minW="320px" minH="220px" w="100%" wB="auto" maxW="540px" display="flex" fD="column" jC="space-between" aI="flex-start" p="15px" bgSize="cover" br="16px" bgImgUrl="src/assets/ingredients-4.jpeg" >
                <ReUseDiv>
                    <ReUseText color="#2D3F59" fs="24px" fw="bold">Hyaluronic Acid<br/></ReUseText>
                    <ReUseText Color="#727272" fs="15px" fw="bold">For smooth, supple and soft skin!</ReUseText>
                </ReUseDiv>
                <ReUseButton color="#003569" fw="bold" tD="underline" border="none"  bg="transparent" >SEE MORE</ReUseButton>
            </ReUseDiv>

            <ReUseDiv m="15px 0px" minW="320px" minH="220px" w="100%" wB="auto" maxW="540px" display="flex" fD="column" jC="space-between" aI="flex-start" p="15px" bgSize="cover" br="16px" bgImgUrl="src/assets/ingredients-5.jpeg" >
                <ReUseDiv>
                    <ReUseText color="#2D3F59" fs="24px" fw="bold">Lactobacillus<br/></ReUseText>
                    <ReUseText Color="#727272" fs="15px" fw="bold">Invigorate your gut microbiome</ReUseText>
                </ReUseDiv>
                <ReUseButton color="#003569" fw="bold" tD="underline" border="none"  bg="transparent" >SEE MORE</ReUseButton>
            </ReUseDiv>

            
            <ReUseDiv m="15px 0px"  displayB="block" display="none"   h="100%"  maxW="90px">
                <ReUseImage alt="art-image" h="100%"src="src/assets/ingredients-6.jpeg"/>
            </ReUseDiv>
        </ReUseDiv>
        
        
    </ReUseDiv>
)