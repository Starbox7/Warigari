import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class SignupNavButton extends StatelessWidget {
  const SignupNavButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final navigator = Navigator.of(context);
    return SizedBox(
      height: rem(4),
      child: TextButton(
        onPressed: () {
          navigator.pushNamed('/signup');
        },
        child: const Text('회원가입'),
      ),
    );
  }
}
