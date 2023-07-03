import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/signin/views/atoms/forget_nav_button.dart';
import 'package:app/src/modules/signin/views/atoms/signup_nav_button.dart';
import 'package:flutter/material.dart';

class NavList extends StatelessWidget {
  const NavList({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.max,
      children: [
        const ForgetNavButton(),
        SizedBox(width: rem(1)),
        Text(
          '|',
          style: TextStyle(
            color: Theme.of(context).colorScheme.primary,
          ),
        ),
        SizedBox(width: rem(1)),
        const SignupNavButton(),
      ],
    );
  }
}
