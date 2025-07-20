# Problem modelling

## Chosen model

As mentioned in `ADR#2`, the chosen data modelling is `Precomputed Access Edge`.


### Behavior definitions

#### User access

1. **User given `direct` access**

```gherkin
Given user X had no access to resource Y
      groups that user X belongs has no access to resource Y
When user X is given access to resource Y
Then user X should have access to resource Y
```
| id  | user_id   | resource_id  | access_type |
| --  | -------   | -----------  | ----------- |
| id1 | user_id_X | resouce_id_Y | direct      |

> 💡 Simple edge insertion and no problem


2. **User's group granted access with no direct access**

```gherkin
Given user U1 had no direct access resource Y
      user U2 had no direct access resource Y
      user U1, U2 belong to group G
      group G has no access to resource Y
When the group G is given access to resource Y
Then users in group G should have access to resource Y
``` 
> 💡 Simple edges insertion and no problem

> 💡 The might contain thousands of user and eventually consisteny is needed and we need background worker to iterate all over the user and insert edges.
  
| id  | user_id    | resource_id  | access_type |
| --  | -------    | -----------  | ----------- |
| id1 | user_id_U1 | resouce_id_Y | group       |
| id1 | user_id_U2 | resouce_id_Y | group       |

3. **User's group granted access with direct access**

```gherkin
Given user U1 had direct access to resource Y
      user U1 belong to group G
When the group G is given access to resource Y
Then users in group G should have access to resource Y
     but to keep direct access information
```

| id  | user_id    | resource_id  | access_type |
| --  | -------    | -----------  | ----------- |
| id1 | user_id_U1 | resouce_id_Y | direct      |

> 💡 Since we have unique constraint in our data modelling, it could ensure that only single edge stay between user and resource. 

> 💡 In group grant access endpoint, it should only suffice to try insert edges between all the users in group into given resource. If user has direct access, it is only sufficient to try to insert if it is already there just ignore it.

4. **Group's access provoked with direct access**

```gherkin
Given user U1 had direct access to resource Y
      user U1 belong to group G
When the group G's access provoked to resource Y
Then user U1 should have no access to resource Y
```
> 💡 In group provoke access endpoint, it only suffice to try remove to edges with access_type is group and users belonged to the group

> 💡 Since edge deletion is only group access type, the direct access should remain intact 

5. **Group access revoked without direct access**

```gherkin
Given user U1 had no direct access to resource Y
      user U1 belong to group G
      group G has access to resource Y
When the access to resource Y for group G is revoked
Then user U1 should have no access to resource Y

```
> 💡 Simple edge deletion, no problem

> 💡 Background worker needed to remove all edge belong to group 
