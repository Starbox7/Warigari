import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/signin/views/atoms/signin_title.dart';
import 'package:app/src/modules/signin/views/blocks/nav_list.dart';
import 'package:app/src/modules/signin/views/blocks/signin_form.dart';
import 'package:flutter/material.dart';

class Signin extends StatelessWidget {
  const Signin({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.max,
          children: [
            const SigninTitle(),
            SizedBox(height: rem(1)),
            const SigninForm(),
            SizedBox(height: rem(1)),
            const NavList(),
          ],
        ),
      ),
    );
  }
}
