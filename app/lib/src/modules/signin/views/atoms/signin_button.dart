import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/widgets/button.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class SigninButton extends HookWidget {
  const SigninButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final blue = Theme.of(context).colorScheme.primary;
    debugPrint(blue.toString());
    return Container(
      width: vw(context, 70),
      padding: EdgeInsets.all(rem(1.5)),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(rem(0.5))),
        color: blue,
      ),
      child: Button(
        text: '로그인',
        onPress: () {
          debugPrint('hello');
        },
      ),
    );
  }
}
