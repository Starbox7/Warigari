import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/signin/views/atoms/id_input.dart';
import 'package:app/src/modules/signin/views/atoms/password_input.dart';
import 'package:app/src/modules/signin/views/atoms/signin_button.dart';
import 'package:flutter/material.dart';

class SigninForm extends StatelessWidget {
  const SigninForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Column(
        children: [
          const IdInput(),
          SizedBox(height: rem(1)),
          const PasswordInput(),
          SizedBox(height: rem(1)),
          const SigninButton(),
        ],
      ),
    );
  }
}
