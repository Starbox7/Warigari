import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/signup/views/atoms/email_input.dart';
import 'package:app/src/modules/signup/views/atoms/id_input.dart';
import 'package:app/src/modules/signup/views/atoms/nickname_input.dart';
import 'package:app/src/modules/signup/views/atoms/password_input.dart';
import 'package:app/src/modules/signup/views/atoms/password_valid_input.dart';
import 'package:app/src/modules/signup/views/atoms/signup_button.dart';
import 'package:flutter/material.dart';

class SignupForm extends StatelessWidget {
  const SignupForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const IdInput(),
        SizedBox(height: rem(1)),
        const PasswordInput(),
        SizedBox(height: rem(1)),
        const PasswordValidInput(),
        SizedBox(height: rem(1)),
        const NicknameInput(),
        SizedBox(height: rem(1)),
        const EmailInput(),
        SizedBox(height: rem(1)),
        const SignupButton(),
      ],
    );
  }
}
