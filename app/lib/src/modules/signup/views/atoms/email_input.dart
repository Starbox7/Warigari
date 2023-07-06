import 'package:app/main.dart';
import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/widgets/input.dart';
import 'package:app/src/modules/signup/views/atoms/signup_form_tag.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class EmailInput extends HookConsumerWidget {
  const EmailInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupNotifier = ref.watch(signupProvider.notifier);
    final Color grey = Theme.of(context).colorScheme.shadow;
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.max,
      children: [
        SizedBox(
          width: vw(context, 20),
          child: const SignupFormTag(text: '이메일'),
        ),
        Container(
          width: vw(context, 70),
          decoration: BoxDecoration(
            border: Border(bottom: BorderSide(color: grey)),
          ),
          child: Input(
            init: '',
            obscureText: false,
            onChangeText: (email) => signupNotifier.setEmail(email),
            hint: '이메일을 입력해주세요.',
          ),
        )
      ],
    );
  }
}
