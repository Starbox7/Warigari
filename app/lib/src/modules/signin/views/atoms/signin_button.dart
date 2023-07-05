import 'package:app/main.dart';
import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/utils/snackbar.dart';
import 'package:app/src/modules/common/widgets/button.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SigninButton extends HookConsumerWidget {
  const SigninButton({
    super.key,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signinNotifier = ref.watch(signinProvider.notifier);
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    Color blue = Theme.of(context).colorScheme.primary;
    return Container(
      width: vw(context, 70),
      padding: EdgeInsets.all(rem(1.5)),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(rem(0.5))),
        color: blue,
      ),
      child: Button(
        text: '로그인',
        onPress: () async {
          try {
            await signinNotifier.signin();
            // success
          } catch (error) {
            scaffoldMessenger.showSnackBar(ErrorSnackBar(
              message: '로그인에 실패했습니다.',
              context: context,
            ));
          }
        },
      ),
    );
  }
}
