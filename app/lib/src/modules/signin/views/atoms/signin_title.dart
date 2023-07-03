import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class SigninTitle extends StatelessWidget {
  const SigninTitle({super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      'Warigari',
      style: TextStyle(
        fontSize: rem(3),
        fontFamily: 'CarterOneRegular',
        fontWeight: FontWeight.w700,
      ),
    );
  }
}
