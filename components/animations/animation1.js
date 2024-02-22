import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnUI,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Button from "./Button";

const HEIGHT = 50;

const Animation1 = () => {
  const pressed = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scrollRef = useAnimatedRef();
  const scrollOffSet = useScrollViewOffset(scrollRef);

  // const opacity = interpolate(sharedValue.value, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0],
  //   extrapolate: Extrapolate.CLAMP,
  // });

  const tap = Gesture.Tap()
    .onBegin(() => (pressed.value = true))
    .onFinalize(() => (pressed.value = false));

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onFinalize(() => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => {
    // console.log("shared: ", scrollOffSet.value);
    return {
      color: interpolateColor(
        scrollOffSet.value,
        [0, HEIGHT],
        ["#000", "#ccc"]
      ),
      opacity: withTiming(
        interpolate(
          scrollOffSet.value,
          [0, HEIGHT / 2],
          [1, 0],
          Extrapolate.CLAMP
        ),
        { duration: 1000 }
      ),
    };
  });

  const AnimatedTranslateX = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            interpolate(
              scrollOffSet.value,
              [0, HEIGHT / 2],
              [-500, 0],
              Extrapolate.CLAMP
            ),
            { duration: 1000 }
          ),
        },
      ],
    };
  });

  const ImageTranslateY = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            interpolate(
              scrollOffSet.value,
              [0, HEIGHT * 7.5],
              [0, -300],
              Extrapolate.CLAMP
            )
          ),
        },
      ],
    };
  });

  const MoveImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            interpolate(
              scrollOffSet.value,
              [0, HEIGHT / 2],
              [90, 0],
              Extrapolate.CLAMP
            ),
            { duration: 1000 }
          ),
        },
      ],
      // borderWidth: withTiming(
      //   interpolate(
      //     scrollOffSet.value,
      //     [0, HEIGHT / 2],
      //     [0, 2],
      //     Extrapolate.CLAMP
      //   ),
      //   { duration: 200 }
      // ),
    };
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: offsetX.value,
      },
      {
        translateY: offsetY.value,
      },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: pressed.value ? "#FFE04B" : "#b58df1",
  }));

  // function myWorklet(greeting) {
  //   "worklet";
  //   console.log(`${greeting} from the UI thread`);
  // }

  // function onPress() {
  //   runOnUI(myWorklet)("Howdy");
  // }

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white" }}>
        <Animated.View style={[styles.headerTextWrapper]}>
          <Animated.Text style={[styles.headerText, AnimatedTranslateX]}>
            Peddy Memoji
          </Animated.Text>
          {/* <Button onPress={() => console.log("you pressed me ")} /> */}
          <GestureDetector gesture={pan}>
            <Animated.Image
              style={[styles.emoji, MoveImage, animatedStyles]}
              source={require("../../assets/emoticon-g16f3ccc07_1280.png")}
            />
          </GestureDetector>
        </Animated.View>
        <Animated.ScrollView
          ref={scrollRef}
          style={styles.container}
          scrollEventThrottle={16}
        >
          <Animated.Text style={[styles.anim1, animatedStyle]}>
            Peddy Memoji
          </Animated.Text>

          <Animated.Text style={{ paddingHorizontal: 10 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            incidunt aspernatur deleniti veniam, nihil rerum fugiat, iusto
            reiciendis accusantium inventore soluta. Sit omnis corporis cum
            inventore libero, laboriosam porro totam aliquid in eos facilis nemo
            dolorem! Placeat dignissimos, qui eius fugiat inventore a nobis
            harum tenetur tempore rem in ut perspiciatis, amet tempora sit ad
            sequi accusamus quidem officiis, laboriosam distinctio. Voluptate
            aliquam, dolores vitae qui ab amet quod saepe nemo dolorum et!
            Asperiores obcaecati excepturi a, dolorem, minima error laboriosam
            deleniti omnis aliquam ipsum velit quia, quasi itaque ad assumenda
            nam placeat sed sequi autem odio earum culpa provident vel
            veritatis. Laborum delectus magni, quod nemo non inventore, corporis
            ex deleniti cupiditate dolor optio, voluptatem iure perferendis
            quaerat dolore qui. Sit molestiae placeat, obcaecati repellat,
            doloremque perferendis corrupti nihil ipsa eaque odio modi odit
            praesentium, aperiam labore aliquid temporibus debitis soluta esse
            suscipit. Ratione delectus obcaecati nemo veniam laboriosam impedit
            provident at error, quos sequi incidunt, corporis aliquid eius. Sit
            et voluptatibus rerum quo incidunt? Porro repudiandae sed laborum
            officia ipsam adipisci cupiditate veniam. Earum laudantium fugit
            quam consequuntur possimus. Inventore ducimus at est maxime
            mollitia, laudantium maiores corrupti nostrum aliquid obcaecati,
            voluptate provident consequatur amet perspiciatis, molestias dolore
            dolor modi eligendi id quae harum doloribus culpa! Similique
            reiciendis, nesciunt adipisci iure quisquam unde autem quod
            expedita! Mollitia quo exercitationem odit voluptate nesciunt
            aperiam facilis reprehenderit alias dolorum ducimus obcaecati vel
            eius aut modi quia magni fugiat veritatis fugit, hic voluptas sequi
            sunt sapiente totam! Ipsam suscipit illo veritatis reiciendis quasi
            iste. Vel ullam praesentium facere. Optio ipsam, dicta voluptate,
            illum debitis voluptates nemo beatae aliquam fugit, odit voluptas.
            Odio ex rerum autem rem et, at quam, hic necessitatibus ipsa numquam
            architecto quae eligendi modi magnam ipsam amet maiores alias esse
            repudiandae tempora dicta ratione pariatur culpa! Placeat delectus,
            quidem aliquam dignissimos ea modi, sed debitis, veritatis quasi quo
            nostrum. Laboriosam, doloremque pariatur! Repellat, magnam!
            Molestias quos quasi porro, accusantium quibusdam nihil? Tempore
            nesciunt voluptatem voluptate aperiam explicabo ipsam eligendi
            adipisci laborum eius sed? Asperiores praesentium qui cupiditate
            inventore? Voluptate fugit maiores laudantium maxime porro, unde in
            omnis quidem cupiditate alias? Expedita alias odio facilis dolorum
            deleniti numquam distinctio iste a magni rem quas itaque eius
            quibusdam, adipisci fugit. Eos ullam in minus nam nisi cupiditate
            explicabo, quia quaerat quidem vero impedit eaque velit, repellat
            voluptas necessitatibus consequatur enim quod aspernatur et placeat!
            Iure, molestiae necessitatibus nobis voluptas beatae adipisci eos
            officiis rem voluptatibus blanditiis. Porro deleniti doloremque
            libero, saepe ullam quae consequatur qui reprehenderit, esse
            eligendi quia soluta numquam beatae tenetur perspiciatis dolor.
            Dicta voluptatem blanditiis cum doloremque, id sed! Omnis asperiores
            deleniti, dolor unde illum eligendi beatae commodi autem explicabo
            officia! Quo porro ut voluptatum alias, explicabo iure error quia,
            odio ducimus quaerat quam, aut et officiis perferendis recusandae
            voluptates rem magnam sapiente atque nam fugiat architecto! Ipsa,
            magni earum, est perspiciatis accusamus, ducimus assumenda ratione
            maxime voluptatibus totam voluptate. Eos, consectetur pariatur
            molestias perferendis sapiente architecto fugit nostrum ea
            accusantium dolore eaque in totam eius nesciunt, iure animi.
            Necessitatibus dolor ut, cum quam voluptas, consectetur
            reprehenderit tempora nostrum id aliquid, voluptatibus repudiandae
            excepturi dolorum eveniet quos voluptatem fugiat impedit explicabo
            consequatur quod temporibus! Architecto magni minima laboriosam
            autem vero ea in natus repudiandae. Perspiciatis sequi dolor autem
            dicta necessitatibus, libero fuga sit ipsam aperiam, consequatur
            alias. Sapiente reprehenderit sit asperiores totam corporis vel ad
            obcaecati? Officia eos iusto sunt suscipit minus repudiandae,
            veritatis exercitationem impedit atque error sapiente aliquid
            recusandae magnam eum optio quae? Corporis aliquid nihil quidem
            laboriosam tenetur neque eum quas temporibus, quisquam provident est
            dicta, corrupti alias ipsum? Eveniet sunt officiis tenetur! Numquam
            ipsum, nobis culpa, vel veniam exercitationem incidunt officia
            soluta harum quae amet. Mollitia eveniet nesciunt error sapiente
            distinctio quae sunt temporibus aliquid, asperiores, earum ipsum,
            architecto saepe est? Ea eos consequuntur eligendi corrupti iure
            minus ipsa fugiat ex facilis. Sapiente cumque rerum assumenda!
            Laudantium unde distinctio ad est quasi officiis aspernatur fuga,
            omnis eveniet inventore consequatur vero sequi molestiae optio nisi
            debitis accusamus veniam incidunt ab error rem nam. Error neque, qui
            nulla nam fuga dolorum distinctio ad dicta voluptas nihil quis,
            quisquam, quo vitae laudantium explicabo sapiente nemo maiores
            quibusdam necessitatibus modi. Facilis aperiam cupiditate iste
            explicabo! Beatae perferendis similique doloribus quo earum! Eaque
            neque culpa provident hic cupiditate illum reiciendis beatae eum
            similique, ipsum sed aperiam nihil quam corporis nostrum atque quis
            repellendus? Officiis laudantium adipisci doloremque minima aliquid
            facere nulla, possimus quidem animi, recusandae rerum sunt
            voluptatem modi aut. Odit, perspiciatis. Veritatis a repudiandae,
            quas aliquam iste quam rerum. Reprehenderit aliquid facilis sapiente
            excepturi, ipsum provident, optio numquam cupiditate sequi commodi
            aperiam porro minus quisquam libero! Maiores cum asperiores nobis
            sit mollitia, eius accusantium pariatur excepturi nostrum corporis,
            ipsam totam sequi odio, labore eaque ex maxime non ea omnis dolor
            distinctio minima facere debitis obcaecati? Fuga illo saepe quos
            consequuntur soluta molestiae nesciunt repudiandae velit possimus,
            iusto id excepturi mollitia asperiores. Culpa harum minima earum
            ullam consequuntur? Laudantium repudiandae, alias consequatur
            sapiente nihil pariatur sed iure quam quis error officiis, optio ab
            voluptates ratione aut molestias deleniti! Non qui ipsam odit,
            aliquam hic libero! Repellat molestias est ut assumenda impedit quam
            sit, nihil nobis ullam voluptate voluptas aliquid veritatis saepe
            ipsa officiis nam odit aut laborum. Nam doloremque culpa at maxime
            alias soluta facilis fugit voluptate, aliquam vel explicabo
            voluptatem dolor quia. Magnam adipisci rem molestiae in ducimus
            fugiat corporis quam asperiores? Cum architecto numquam error! Quam,
            voluptates nemo! Quae molestiae, rerum laborum delectus sint sed vel
            repellat ex hic dolor, nobis aut earum asperiores fugiat architecto
            reiciendis eos commodi? Atque hic, quaerat vel necessitatibus ullam
            iste est eius ipsa alias minus ad porro beatae error dolorum
            molestias amet deserunt? Aut laborum veniam dolorum officiis quas
            rerum nam perferendis, obcaecati quis. Quaerat incidunt, repudiandae
            nihil voluptates odit at, laborum, quam aspernatur dicta perferendis
            aut? Omnis ut aliquid quae, ducimus vero, eaque tempora accusamus
            reiciendis distinctio necessitatibus voluptas at cumque soluta ab
            excepturi. Recusandae exercitationem laborum debitis aut sit saepe?
            Itaque, sed tempore nihil maxime eligendi eveniet rerum?
          </Animated.Text>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Animation1;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  anim1: {
    fontSize: 35,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 20,
    marginTop: 70,
  },
  headerTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    marginVertical: 20,
    marginLeft: 10,
    width: "35%",
  },
  emoji: {
    height: 100,
    width: 100,
    zIndex: 200,
    borderRadius: 100,
    borderColor: "black",
  },
  emojiContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
  },
});
