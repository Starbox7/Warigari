import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class ForgetNavButton extends StatelessWidget {
  const ForgetNavButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: rem(4),
      child: TextButton(
        onPressed: () {},
        child: const Text('비밀번호를 잊으셨나요?'),
      ),
    );
  }
}
