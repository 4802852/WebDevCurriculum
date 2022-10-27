# Quest00

## Git

- git
  - `git commit`
    - git 저장소에 디렉토리의 모든 파일에 대한 스냅샷을 저장한다.
    - commit 을 가능한 가볍게 유지하기 위해, 디렉토리 전체를 복사하지 않고, 저장소의 이전 버전과 다음 버전의 변경내역(delta)를 저장한다.
  - `git branch`
    - 브랜치는 특정 커밋에 대한 참조(reference) 이며, 하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역으로 볼 수 있다.
    - `git branch [branch]`: branch 생성
    - `git checkout [branch]`: branch checkout
    - `git merge`
      - 두 개의 부모(parent)를 가리키는 특별한 커밋을 만들어낸다.
      - 한 부모의 모든 작업 내역과 나머지 부모의 모든 작업, 그리고 두 부모의 모든 부모들의 작업 내역을 포함한다.
    - `git rebase`: 커밋들을 모아 복사한 뒤, 다른 곳에 떨궈놓는다.
      - (다른 브랜치가 선택된 상태에서) `git rebase main`: 현재 브랜치를 main 브랜치로 베이스를 옮긴다.
  - HEAD: 현재 체크아웃 된 커밋을 가리킨다. 일반적으로 브랜치의 이름을 가리키고 있는다.
    - HEAD 분리: HEAD 를 분리한다는 것은 HEAD 를 브랜치 대신 커밋에 붙이는 것을 말한다.
  - 상대 참조(Relative Ref): 커밋을 선택하는 방법 중 하나로, 커밋을 구분하는 해시값이 매우 길고 복잡하기 때문에 유용하게 쓰일 수 있다.
    - `^`: 한칸 부모, `git checkout main^^`, `git checkout bugFix^`
    - `~<num>`: num 칸 부모, `git checkout HEAD~3`
    - `^<num>`: num 번째 부모, `git checkout main^2`
  - `git branch -f`: 브랜치를 강제로 옮겨, 특정 커밋에 직접적으로 재지정할 수 있다.
    - `git branch -f main HEAD~3`: main 브랜치를 HEAD 의 3번째 부모로 이동 및 지정
  - `git reset`: 브랜치가 예전의 커밋을 가리키도록 이동한다. `git reset HEAD^`
  - `git revert`: 로컬 브랜치에서는 reset 을 사용할 수 있지만, 리모트 브랜치에서는 변경분을 삭제하고 되돌린 내용을 공유해야 한다. `git revert HEAD`
  - `git cherry-pick`
    - `git cherry-pick [Commit1] [Commit2] [...]`: 현재 위치(HEAD) 아래에 있는 일련의 커밋들에 대한 복사본을 만든다.
  - 인터렉티브 리베이스(Interactive Rebase): cherry-pick 은 원하는 커밋이 무엇인지 알 때 유용하지만, 모를때는 인터렉티브 리베이스를 이용하여, 리베이스할 일련의 커밋들을 검토할 수 있다.
    - `git rebase -i HEAD~4`
  - `git tag`: 커밋에 태그를 달아 이정표로 세울 수 있다. 태그된 커밋은 수정이 불가능하다.
    - `git tag v1 C1`
    - `git describe [ref]` => `<tag>_<numCommits>_g<hash>`: describe 명령어를 입력하면 ref 기준으로(입력하지 않을 경우 HEAD) 가장 가까운 부모태그(tag), 해당 태그와 몇 커밋 떨어져 있는지(numCommits), 해당 커밋의 해시(hash) 의 결과를 보여준다.
  - `git clone`: 원격 저장소의 복사본을 로컬에 생성
  - `git fetch`: 원격 저장소에는 있지만 로컬에는 없는 커밋들을 다운로드 받고, 원격 브랜치가 가리키는 곳을 업데이트한다.
  - `git pull`: `git fetch` 로 다운받은 데이터로 업데이트하여 변경을 반영하는 방법으로는 `git cherry-pick`, `git rebase`, `git merge` 등이 있다. 하지만 fetch 후에 업데이트 하는 과정이 워낙 자주있어, 이를 한번에 하는 명령을 제공하는 데 이것이 pull 이다.
  - `git add`
  - `git push`: 로컬에서 진행한 나의 작업을 원격 저장소에 공유한다.
    - 히스토리가 엇갈릴 경우(작업한 코드의 베이스가 다른 사람의 수정으로 인하여 구버전이 되었을 경우) push 가 불가능하다. 이럴 경우 fetch 를 통하여 데이터를 다운로드 받고 merge 를 이용하여 수정사항에 대한 반영을 진행한 후에 push 를 할 수 있다. 이를 한꺼번에 해주는 명령어는 `git pull --rebase`
    - pull request: 보통 규모가 큰 개발팀에서 일할 때 main 브랜치는 잠겨있어, 변경 사항을 적용하기 위해서는 pull request 를 거쳐야 한다.
    - `git push origin main`: 내 저장소의 main 이라는 브랜치로 가서 모든 커밋을 수집하고, origin 의 main 브랜치로 가서 부족한 커밋을 채워넣는다.
      - push 하고자 하는 로컬 브랜치와 업데이트하고자 하는 원격 브랜치가 다를 경우, `git push origin <source>:<dest>` 와 같이 쓸 수 있다.
  - `git merge` vs `git rebase`: rebase 는 커밋 트리를 깔끔하게 정리할 수 있으나 커밋 트리의 히스토리를 바꿔버린다. (먼저 완료된 커밋이 나중에 완료된 커밋의 아래로 rebase 될 수가 있다.) 따라서 이력이 보존되는 것을 선호한다면 merge, 깔끔한 커밋 트리를 원한다면 rebase 를 사용하면 된다.
    - `git rebase side1 side2`: side1 브랜치 아래에 side2 브랜치를 복사하여 이동시킨다.
    - `git merge side1`: (현재 브랜치에) side1 브랜치를 합쳐 새로운 커밋을 만든다.
  - 원격 추적: `main`과 `o/main` 의 관게는 "원격 추적" 속성을 통하여 설명될 수 있다.
    - `git clone` 을 진행하면서 git 은 원격 저장소에 있는 모든 브랜치에 대해 로컬에 원격 브랜치를 생성하고, 원격 저장소에서 현재 active 한 브랜치를 추적하는 로컬 브랜치를 생성한다(대부분 main).
    - 임의의 브랜치가 `o/main` 을 추적할 수 있도록 하는 방법은
      - `git checkout -b [not main] o/main`: \[not main\] 브랜치를 생성하면서 o/main 를 추적하도록 한다.
      - `git branch -u o/main [not main]`: \[not main\] 브랜치가 o/main 을 추적하도록 한다.
  - `git stash`: 어떤 작업을 하던 중 다른 요청이 들어와 작업을 멈추고 브랜치를 변경해야 할 경우, 아직 완료하지 않은 일을 commit 하지 않고 스택에 저장할 수 있도록 하는 기능이다.
    - 명령어를 사용하면 "Modified 이면서 Tracked 상태인 파일" 과 "Staging Area 에 있는 파일"을 스택에 저장한다.
    - `git stash list`: stash 목록 확인
    - `git stash apply`: 저장했던 stash 불러오기
    - `git stash drop`: 저장했던 stash 삭제하기
- .git directory
  - 프로젝트의 루트 디렉토리에 생성된다.
  - objects 폴더: 해쉬된 이름과 암호화된 내용의 파일을이 저장된 데이터베이스 폴더
  - config 파일: 유저 정보 등 깃 설정
  - refs 폴더: 브랜치와 태그와 관련된 내용이 저장된 폴더
  - HEAD 파일: HEAD 정보가 저장된 파일
  
## Checklist

* 형상관리 시스템은 왜 나오게 되었을까요?



* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
* git과 GitHub은 어떻게 다를까요?
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?