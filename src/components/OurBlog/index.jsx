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
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl={`https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7bV7PmqpOzeTtg3h-tJ1a-UOkOQOw8yGeo3mr-vVI80i4EYDzxhrgDPL1eu~GJ~bqat3ANp6RTQLOMIWmWDfu0hf0ArNzKBjgk7EJA217IVpUZiWmyc53dbJPpRQ3HTExSwd5NYAVLXRN9yRNMGT6TE~4bM8VWKqjmj8917Q0LMXPKYI~zAfVQ2SnT60g3UtsjezfuSPiRw8sAEP78U6AaGgU0Q53P4UslEqwu02j6mUDZFvHNXlQ1A1jGwJ8XeYQ3IAjdYWlDkmsz~SmLnA2IORUsnfw4Hq3k33Isaf7mXRKW0kyI~9EkHpYpTpQaM9mgfW4sVWqGt6Rc~35XsdQ__`}>
                    <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXVhUU2d3ANcZ840z5orSerq6FPuU8DMfAjVpLYI31a-agXQRWZDHpffWxkeEMJCvzHDqx0CM1L~WrnRtrd1VurTxZu9G6bZpNldUVK3MjDwY68uYMfnxqZbVgtTcKjAnDSS2cksLCxZQoH8bD4A4D8C8kMSDymFMnnocQ1VEIXlpedRFm64lb7NrYV7LfX2BuNBUbkJwcswSAowfRL7vExV7AAGUi~9co2TbEFXw99piyQsOSHQLGn64w3m5nXceJr1~KmNKuJiT4-0SzJwT3ehSNiGO9pNiNhZeD0rj3Gcdqy-Kr1qdiQzOEctvF3MNINLOtOnuR~fygypjub2WQ__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2023 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl={`https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7bV7PmqpOzeTtg3h-tJ1a-UOkOQOw8yGeo3mr-vVI80i4EYDzxhrgDPL1eu~GJ~bqat3ANp6RTQLOMIWmWDfu0hf0ArNzKBjgk7EJA217IVpUZiWmyc53dbJPpRQ3HTExSwd5NYAVLXRN9yRNMGT6TE~4bM8VWKqjmj8917Q0LMXPKYI~zAfVQ2SnT60g3UtsjezfuSPiRw8sAEP78U6AaGgU0Q53P4UslEqwu02j6mUDZFvHNXlQ1A1jGwJ8XeYQ3IAjdYWlDkmsz~SmLnA2IORUsnfw4Hq3k33Isaf7mXRKW0kyI~9EkHpYpTpQaM9mgfW4sVWqGt6Rc~35XsdQ__`}>
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px"  br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXVhUU2d3ANcZ840z5orSerq6FPuU8DMfAjVpLYI31a-agXQRWZDHpffWxkeEMJCvzHDqx0CM1L~WrnRtrd1VurTxZu9G6bZpNldUVK3MjDwY68uYMfnxqZbVgtTcKjAnDSS2cksLCxZQoH8bD4A4D8C8kMSDymFMnnocQ1VEIXlpedRFm64lb7NrYV7LfX2BuNBUbkJwcswSAowfRL7vExV7AAGUi~9co2TbEFXw99piyQsOSHQLGn64w3m5nXceJr1~KmNKuJiT4-0SzJwT3ehSNiGO9pNiNhZeD0rj3Gcdqy-Kr1qdiQzOEctvF3MNINLOtOnuR~fygypjub2WQ__">
                    <ReUseText color="#fff" position="relative" top="60px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl={`https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7bV7PmqpOzeTtg3h-tJ1a-UOkOQOw8yGeo3mr-vVI80i4EYDzxhrgDPL1eu~GJ~bqat3ANp6RTQLOMIWmWDfu0hf0ArNzKBjgk7EJA217IVpUZiWmyc53dbJPpRQ3HTExSwd5NYAVLXRN9yRNMGT6TE~4bM8VWKqjmj8917Q0LMXPKYI~zAfVQ2SnT60g3UtsjezfuSPiRw8sAEP78U6AaGgU0Q53P4UslEqwu02j6mUDZFvHNXlQ1A1jGwJ8XeYQ3IAjdYWlDkmsz~SmLnA2IORUsnfw4Hq3k33Isaf7mXRKW0kyI~9EkHpYpTpQaM9mgfW4sVWqGt6Rc~35XsdQ__`}>
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item  minH="226px" maxH="240px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXVhUU2d3ANcZ840z5orSerq6FPuU8DMfAjVpLYI31a-agXQRWZDHpffWxkeEMJCvzHDqx0CM1L~WrnRtrd1VurTxZu9G6bZpNldUVK3MjDwY68uYMfnxqZbVgtTcKjAnDSS2cksLCxZQoH8bD4A4D8C8kMSDymFMnnocQ1VEIXlpedRFm64lb7NrYV7LfX2BuNBUbkJwcswSAowfRL7vExV7AAGUi~9co2TbEFXw99piyQsOSHQLGn64w3m5nXceJr1~KmNKuJiT4-0SzJwT3ehSNiGO9pNiNhZeD0rj3Gcdqy-Kr1qdiQzOEctvF3MNINLOtOnuR~fygypjub2WQ__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2023 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="226px" maxH="240px"  br="16px" bgSize="cover"  bgImgUrl={`https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7bV7PmqpOzeTtg3h-tJ1a-UOkOQOw8yGeo3mr-vVI80i4EYDzxhrgDPL1eu~GJ~bqat3ANp6RTQLOMIWmWDfu0hf0ArNzKBjgk7EJA217IVpUZiWmyc53dbJPpRQ3HTExSwd5NYAVLXRN9yRNMGT6TE~4bM8VWKqjmj8917Q0LMXPKYI~zAfVQ2SnT60g3UtsjezfuSPiRw8sAEP78U6AaGgU0Q53P4UslEqwu02j6mUDZFvHNXlQ1A1jGwJ8XeYQ3IAjdYWlDkmsz~SmLnA2IORUsnfw4Hq3k33Isaf7mXRKW0kyI~9EkHpYpTpQaM9mgfW4sVWqGt6Rc~35XsdQ__`}>
                <DateTag  bg="#003569" color="#fff" w="80px">
                        20 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">The Covid-19 Epidemic In 2022 <br/> Is Back</ReUseText>
                </Item>
                <Item minH="450px" br="16px" bgSize="cover" bgImgUrl="https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXVhUU2d3ANcZ840z5orSerq6FPuU8DMfAjVpLYI31a-agXQRWZDHpffWxkeEMJCvzHDqx0CM1L~WrnRtrd1VurTxZu9G6bZpNldUVK3MjDwY68uYMfnxqZbVgtTcKjAnDSS2cksLCxZQoH8bD4A4D8C8kMSDymFMnnocQ1VEIXlpedRFm64lb7NrYV7LfX2BuNBUbkJwcswSAowfRL7vExV7AAGUi~9co2TbEFXw99piyQsOSHQLGn64w3m5nXceJr1~KmNKuJiT4-0SzJwT3ehSNiGO9pNiNhZeD0rj3Gcdqy-Kr1qdiQzOEctvF3MNINLOtOnuR~fygypjub2WQ__">
                <DateTag  bg="#003569" color="#fff" w="80px">
                        17 APR
                    </DateTag>
                    <ReUseText color="#fff" position="relative" top="30px" left="20px" fw="bold">Hac hendrerit mus nons semper <br/> suspendisse</ReUseText>
                </Item>
            </Masonry>

        </ReUseDiv>
    </ReUseDiv>
)