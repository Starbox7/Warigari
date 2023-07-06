import 'package:app/main.dart';
import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/utils/snackbar.dart';
import 'package:app/src/modules/common/widgets/button.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignupButton extends HookConsumerWidget {
  const SignupButton({
    super.key,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupNotifier = ref.watch(signupProvider.notifier);
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    final navigator = Navigator.of(context);
    Color blue = Theme.of(context).colorScheme.primary;
    return Container(
      width: vw(context, 90),
      padding: EdgeInsets.all(rem(1.5)),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(rem(0.5))),
        color: blue,
      ),
      child: Button(
        text: '회원가입',
        onPress: () async {
          try {
            await signupNotifier.signup();
            navigator.pop();
          } catch (error) {
            scaffoldMessenger.showSnackBar(ErrorSnackBar(
              message: '회웝가입에 실패했습니다.',
              context: context,
            ));
          }
        },
      ),
    );
  }
}
