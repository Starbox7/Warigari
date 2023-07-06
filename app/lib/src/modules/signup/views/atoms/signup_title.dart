import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class SignupTitle extends StatelessWidget {
  const SignupTitle({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Image.asset(
        //   'assets/images/WarigariIcon.png',
        //   width: rem(4),
        //   height: rem(4),
        // ),
        // SizedBox(height: rem(0.5)),
        Text(
          'Sign Up',
          style: TextStyle(
            fontSize: rem(3),
            fontFamily: 'CarterOneRegular',
            fontWeight: FontWeight.w700,
          ),
        ),
      ],
    );
  }
}
