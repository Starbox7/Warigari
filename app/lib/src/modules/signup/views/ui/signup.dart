import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/widgets/header.dart';
import 'package:app/src/modules/signup/views/atoms/signup_title.dart';
import 'package:app/src/modules/signup/views/blocks/signup_form.dart';
import 'package:flutter/material.dart';

class Signup extends StatelessWidget {
  const Signup({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Header(context: context),
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SignupTitle(),
              SizedBox(height: rem(1)),
              const SignupForm(),
            ],
          ),
        ),
      ),
    );
  }
}
