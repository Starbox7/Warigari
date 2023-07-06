import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class SignupFormTitle extends StatelessWidget {
  const SignupFormTitle({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        fontSize: rem(2),
        fontFamily: 'CarterOneRegular',
        fontWeight: FontWeight.w600,
      ),
    );
  }
}
