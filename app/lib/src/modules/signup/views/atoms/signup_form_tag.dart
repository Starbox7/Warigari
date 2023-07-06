import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class SignupFormTag extends StatelessWidget {
  const SignupFormTag({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        fontSize: rem(1.2),
        fontFamily: 'CarterOneRegular',
      ),
    );
  }
}
